import axios, { AxiosInstance } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Serverside axios
 */
export const withAuth = async (props: {
  req: NextApiRequest
  res: NextApiResponse
}): Promise<{ axios: AxiosInstance }> => {
  const jwt = props.req.cookies['jwt'] as string
  const url = props.req.cookies['server-url'] as string

  const axiosInstance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      authorization: jwt,
    },
  })

  return {
    axios: axiosInstance,
  }
}
