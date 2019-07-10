import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import cookieCutter from 'cookie-cutter'

import { User } from 'models'
import { axiosClient, setAuthTokenHeaders } from 'utils/axios-client'
import { getIntialState, persistState } from 'utils/persisted-state'

const STORAGE_KEY = 'awake-auth'

export interface IAuthContext {
  user: User | null
  setUser: (user: User | null) => void
  jwt: string | null
  setJwt: (jwt: string | null) => void
  signInWithSMS: (data: any) => Promise<any>
  confirmSMS: (data: any) => Promise<any>
  logout: () => void
  fetchUser: () => void
  updateUser: (data: any) => void
}

const defaultState = {}

const initialState = getIntialState(STORAGE_KEY) ?? defaultState

setAuthTokenHeaders(initialState.jwt ?? '')

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

AuthContext.displayName = 'AuthContext'

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(initialState.user ?? null)
  const [jwt, setJwt] = useState<string | null>(initialState.jwt ?? null)

  const signInWithSMS = (data) => axiosClient.post(`send-sms-code`, data)

  const confirmSMS = (data) =>
    axiosClient
      .post(`confirm-sms-code`, data)
      .then(({ data }) => {
        const user = data.user as User
        const jwt = data.jwt as string

        setUser(user)
        setJwt(jwt)
        cookieCutter.set('jwt', jwt)
        setAuthTokenHeaders(jwt)

        return data
      })
      .catch((err) => {
        alert(err.message)
      })

  const logout = () => {
    cookieCutter.set('jwt', null)
    setAuthTokenHeaders(null)
    setJwt(null)
    setUser(null)
    window.location.href = '/'
  }

  const fetchUser = () => {
    axiosClient
      .post('fetch-user')
      .then(({ data }) => {
        setUser(data)
      })
      .catch(() => {
        setUser(null)
      })
  }

  const updateUser = (data: any) => {
    axiosClient
      .post('update-user', data)
      .then(({ data }) => {
        setUser(data)
      })
      .catch((err) => {
        console.error(err)
        alert(err.message)
      })
  }

  const value = useMemo(
    () => ({
      user,
      setUser,
      jwt,
      setJwt,
      signInWithSMS,
      confirmSMS,
      logout,
      fetchUser,
      updateUser,
    }),
    [
      user,
      setUser,
      jwt,
      setJwt,
      signInWithSMS,
      confirmSMS,
      logout,
      fetchUser,
      updateUser,
    ]
  )

  useEffect(() => persistState(STORAGE_KEY, { jwt, user }), [jwt, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth hook must be used within a AuthProvider component')
  }
  return context
}
