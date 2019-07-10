import axios from 'axios'
import * as allSettled from 'promise.allsettled'

allSettled.shim()

const prodUrl = 'http://localhost:8080/api/'
export let loadedUrl = false

export const axiosClient = axios.create({
  baseURL: prodUrl,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})

export const setAuthTokenHeaders = (newToken: string) => {
  axiosClient.defaults.headers = {
    authorization: newToken,
    'Content-Type': 'application/json; charset=UTF-8',
  }
}

/**
 * Finds the running dev server, if it's production it instantely sets the url.
 */
export const findDevServerUrl = async (): Promise<string> => {
  // Shortcut
  return prodUrl

  if (loadedUrl) {
    return axiosClient.defaults.baseURL
  }

  if (process.env.NODE_ENV === 'production') {
    loadedUrl = true
    return prodUrl
  }

  const urlsToTry = [
    'http://localhost:8080/api/',
    'http://192.168.0.227:8080/api/',
    'http://192.168.0.203:8080/api/',
    'http://10.0.2.2:8080/api/',
    'https://ss.ew.r.appspot.com/api/',
    prodUrl,
  ]

  return await new Promise((resove, reject) => {
    Promise.allSettled(
      urlsToTry.map((url) => axios.get(url, { timeout: 250 }))
    ).then((results) => {
      if (results.length === 0) {
        console.error('Could not find any dev URL.')
        reject()
        return ''
      }

      // Filter by success.
      results = results.filter((r) => r.status === 'fulfilled')

      // Use the first one
      // @ts-ignore
      const baseUrl = results[0].value.config.url

      axiosClient.defaults.baseURL = baseUrl
      console.log(
        'Using dev server: ' + baseUrl + ', (of ' + results.length + ' success)'
      )

      loadedUrl = true

      resove(baseUrl)
    })
  })
}
