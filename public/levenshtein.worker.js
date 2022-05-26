// Copy from fastest-levenshtein library as imports won't work.
// https://github.com/ka-weihe/fastest-levenshtein

"use strict";
const peq = new Uint32Array(0x10000);
const myers_32 = (a, b) => {
  const n = a.length;
  const m = b.length;
  const lst = 1 << (n - 1);
  let pv = -1;
  let mv = 0;
  let sc = n;
  let i = n;
  while (i--) {
    peq[a.charCodeAt(i)] |= 1 << i;
  }
  for (i = 0; i < m; i++) {
    let eq = peq[b.charCodeAt(i)];
    const xv = eq | mv;
    eq |= ((eq & pv) + pv) ^ pv;
    mv |= ~(eq | pv);
    pv &= eq;
    if (mv & lst) {
      sc++;
    }
    if (pv & lst) {
      sc--;
    }
    mv = (mv << 1) | 1;
    pv = (pv << 1) | ~(xv | mv);
    mv &= xv;
  }
  i = n;
  while (i--) {
    peq[a.charCodeAt(i)] = 0;
  }
  return sc;
};

const myers_x = (a, b) => {
  const n = a.length;
  const m = b.length;
  const mhc = [];
  const phc = [];
  const hsize = Math.ceil(n / 32);
  const vsize = Math.ceil(m / 32);
  let score = m;
  for (let i = 0; i < hsize; i++) {
    phc[i] = -1;
    mhc[i] = 0;
  }
  let j = 0;
  for (; j < vsize - 1; j++) {
    let mv = 0;
    let pv = -1;
    const start = j * 32;
    const end = Math.min(32, m) + start;
    for (let k = start; k < end; k++) {
      peq[b.charCodeAt(k)] |= 1 << k;
    }
    score = m;
    for (let i = 0; i < n; i++) {
      const eq = peq[a.charCodeAt(i)];
      const pb = (phc[(i / 32) | 0] >>> i) & 1;
      const mb = (mhc[(i / 32) | 0] >>> i) & 1;
      const xv = eq | mv;
      const xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
      let ph = mv | ~(xh | pv);
      let mh = pv & xh;
      if ((ph >>> 31) ^ pb) {
        phc[(i / 32) | 0] ^= 1 << i;
      }
      if ((mh >>> 31) ^ mb) {
        mhc[(i / 32) | 0] ^= 1 << i;
      }
      ph = (ph << 1) | pb;
      mh = (mh << 1) | mb;
      pv = mh | ~(xv | ph);
      mv = ph & xv;
    }
    for (let k = start; k < end; k++) {
      peq[b.charCodeAt(k)] = 0;
    }
  }
  let mv = 0;
  let pv = -1;
  const start = j * 32;
  const end = Math.min(32, m - start) + start;
  for (let k = start; k < end; k++) {
    peq[b.charCodeAt(k)] |= 1 << k;
  }
  score = m;
  for (let i = 0; i < n; i++) {
    const eq = peq[a.charCodeAt(i)];
    const pb = (phc[(i / 32) | 0] >>> i) & 1;
    const mb = (mhc[(i / 32) | 0] >>> i) & 1;
    const xv = eq | mv;
    const xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
    let ph = mv | ~(xh | pv);
    let mh = pv & xh;
    score += (ph >>> (m - 1)) & 1;
    score -= (mh >>> (m - 1)) & 1;
    if ((ph >>> 31) ^ pb) {
      phc[(i / 32) | 0] ^= 1 << i;
    }
    if ((mh >>> 31) ^ mb) {
      mhc[(i / 32) | 0] ^= 1 << i;
    }
    ph = (ph << 1) | pb;
    mh = (mh << 1) | mb;
    pv = mh | ~(xv | ph);
    mv = ph & xv;
  }
  for (let k = start; k < end; k++) {
    peq[b.charCodeAt(k)] = 0;
  }
  return score;
};

const distance = (a, b) => {
  if (a.length > b.length) {
    const tmp = b;
    b = a;
    a = tmp;
  }
  if (a.length === 0) {
    return b.length;
  }
  if (a.length <= 32) {
    return myers_32(a, b);
  }
  return myers_x(a, b);
};

const closest = (str, arr) => {
  let min_distance = Infinity;
  let min_index = 0;
  for (let i = 0; i < arr.length; i++) {
    const dist = distance(str, arr[i]);
    if (dist < min_distance) {
      min_distance = dist;
      min_index = i;
    }
  }
  return arr[min_index];
};

onmessage = e => {
  if (e.data.data) {
    const headers = e.data.data[0].split('\t')

    const idColumn = headers.indexOf(e.data.idColumn)
    const nameColumn = headers.indexOf(e.data.nameColumn)

    const copy = e.data.data.concat()

    const rows = copy.filter(r => r !== null && r.length > 0)
      .slice(1)
      .map(r => {
        const parts = r.split('\t')
        return {
          id: parts[idColumn],
          name: parts[nameColumn],
          reduced: parts[nameColumn].toLowerCase().replace(/[^a-z0-9]+/g, '')
        }
      })

    const duplicates = []
    const totalComparisons = rows.length * (rows.length - 1) / 2

    let count = 0
    let lastProgress = 0
    for (let i = 0; i < rows.length; i++) {
      for (let j = i + 1; j < rows.length; j++) {
        count++
        const progress = count / totalComparisons * 100.0

        const one = rows[i].reduced
        const two = rows[j].reduced

        const avgLength = (one.length + two.length) / 2
        const d = distance(one, two)

        let threshold
        if (avgLength <= 6) {
          threshold = 1
        } else if (avgLength <= 12) {
          threshold = 2
        } else {
          threshold = 3
        }

        if (d === 0) {
          duplicates.push({
            type: 'exact',
            one: rows[i],
            two: rows[j]
          })
        } else if (d <= threshold) {
          // Check if one if a substring of the other
          if (one.includes(two) || two.includes(one)) {
            // Some pre- or postfix has been added, most likely not a duplicate
            continue
          }
          // Get only the numeric parts to check for incremental numbering
          const oneNumbers = one.replace(/\D/g, '')
          const twoNumbers = two.replace(/\D/g, '')

          try {
            const oneLong = parseInt(oneNumbers)
            const twoLong = parseInt(twoNumbers)

            if (isNaN(oneLong) && isNaN(twoLong)) {
              // There are no numbers in both, so all differences are in the text, likely duplicate
              duplicates.push({
                type: 'likely',
                one: rows[i],
                two: rows[j]
              })
              // Continue with the next
              continue
            }

            if (oneLong !== twoLong) {
              // They are most likely different entries with incremental numbering
            } else {
              duplicates.push({
                type: 'likely',
                one: rows[i],
                two: rows[j]
              })
              // Continue with the next
              continue
            }
          } catch (err) {
            if (oneNumbers === twoNumbers) {
              duplicates.push({
                type: 'likely',
                one: rows[i],
                two: rows[j]
              })
              // Continue with the next
              continue
            }
          }
        }

        if (progress > lastProgress + 5) {
          postMessage({
            running: true,
            done: count,
            total: totalComparisons,
            duplicateCount: duplicates.length
          })
          lastProgress = Math.floor(progress)
        }
      }
    }

    postMessage({
      running: false,
      done: count,
      total: totalComparisons,
      duplicates: duplicates
    })
  }
}

