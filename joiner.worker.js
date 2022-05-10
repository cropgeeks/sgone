onmessage = e => {
  if (e.data.data) {
    const result = []

    // Store reference from key to object
    const map = new Map()

    let count = 0
    let lastProgress = 0
    e.data.data.forEach(d => {
      count++
      const progress = count / e.data.length * 100.0

      const one = d.one
      const two = d.two

      map.set(one.id, one)
      map.set(two.id, two)

      const oneSet = result.find(r => r.has(one.id))
      const twoSet = result.find(r => r.has(two.id))

      if (!oneSet && !twoSet) {
        const newSet = new Set()
        newSet.add(one.id)
        newSet.add(two.id)
        result.push(newSet)
      } else {
        const theOne = oneSet || twoSet
        theOne.add(one.id)
        theOne.add(two.id)
      }

      if (progress > lastProgress + 5) {
        postMessage({
          running: true,
          done: count,
          total: e.data.length
        })
        lastProgress = Math.floor(progress)
      }
    })

    postMessage({
      running: false,
      done: count,
      total: e.data.length,
      duplicates: result.map(r => {
        return [...r].map(c => map.get(c))
      })
    })
  }
}
