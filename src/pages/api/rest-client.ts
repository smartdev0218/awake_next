import axios from 'axios'

import { API_URL } from 'config'

const apiClient = axios.create({
  baseURL: API_URL,
})

/**
 * Inject the token from local storage if it exists, otherwise continue
 * without any Auth token.
 */
// apiClient.interceptors.request.use(
//   async (config) => {
//     try {
//       return {
//         ...config,
//         headers: {
//           ...config.headers,
//         },
//       };
//     } catch (e) {
//       // no token in local storage
//       return config;
//     }
//   },
//   (error) => Promise.reject(error)
// );

const { get, post, put, delete: destroy } = apiClient
export { get, post, put, destroy }
