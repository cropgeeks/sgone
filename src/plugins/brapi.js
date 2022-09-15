const axios = require('axios').default

/** Store the `serverinfo` result for each BrAPI URL to know which calls are available */
const serverInfos = {
}

/**
     * Sends a BrAPI request to the server using the given parameter configuration
     * @param {String} baseUrl The base URL of the BrAPI endpoint
     * @param {String} url The requested (relative) server URL
     * @param {String} callName The BrAPI call name as returned from `serverinfo`
     * @param {Object} params (Optional) The request payload in the form of a Javascript object
     * @param {String} method (Optional) REST method (default: `'get'`)
     * @param {Boolean} infoCheck (Optional) Indicator whether the BrAPI server should be checked for availability of the requested endpoint. (default: `true`)
     * @returns Promise
     */
const brapiGet = async (baseUrl, url, callName, params = null, method = 'get', infoCheck = true) => {
  if (infoCheck && !serverInfos[baseUrl]) {
    await brapiGetInfo()
  }

  if (infoCheck) {
    if (!serverInfos[baseUrl] || !serverInfos[baseUrl].some(c => c.service === callName && c.versions.indexOf('2.0') !== -1)) {
      return Promise.reject(new Error(`BrAPI call not available for the given URL: ${callName}`))
    }
  }

  return axios({
    baseURL: baseUrl,
    url: url,
    params: params,
    method: method,
    crossDomain: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}

/**
 * Retrieves the observation variables on the BrAPI server
 * @param {Number} page (Optional) Page number (default: `0`)
 * @param {Number} pageSize (Optional) Page size (default: `2147483647`)
 * @returns Promise
 */
const brapiGetGermplasm = (url) => {
  return brapiGet(url, 'germplasm', 'germplasm', null, 'get', false)
    .then(result => {
      if (result && result.data && result.data.result && result.data.result.data) {
        return result.data.result.data
      } else {
        return []
      }
    })
}

/**
 * Retrieves the `serverinfo` from the BrAPI server to check availability of certain endpoints. Sets the field `serverInfo` for this BrAPI server
 */
const brapiGetInfo = async (url) => {
  await brapiGet(url, 'serverinfo', 'serverinfo', null, 'get', false)
    .then(result => {
      if (result && result.data && result.data.result) {
        serverInfos[url] = result.data.result.calls
      } else {
        serverInfos[url] = null
      }
    })
}

export {
  brapiGet,
  brapiGetInfo,
  brapiGetGermplasm
}
