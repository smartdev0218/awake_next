import { createContext, FC, useContext, useMemo, useState } from 'react'

export interface IUserInfoContext {
  phoneNumber: string | null
  setPhoneNumber: (phone: string | null) => void
  userName: string | null
  setUserName: (userName: string | null) => void
  verificationCode: string | null
  setVerificationCode: (verificationCode: string | null) => void
}

export const UserInfoContext = createContext<IUserInfoContext>(
  {} as IUserInfoContext
)

UserInfoContext.displayName = 'UserInfoContext'

export const UserInfoProvider: FC = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null)
  const [verificationCode, setVerificationCode] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)

  const value = useMemo(
    () => ({
      phoneNumber,
      setPhoneNumber,
      verificationCode,
      setVerificationCode,
      userName,
      setUserName,
    }),
    [
      phoneNumber,
      setPhoneNumber,
      verificationCode,
      setVerificationCode,
      userName,
      setUserName,
    ]
  )

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  )
}

export const useUserInfo = (): IUserInfoContext => {

  const context = useContext(UserInfoContext)
  if (context === undefined) {
    throw new Error(
      'useUserInfo hook must be used within a UserInfoProvider component'
    )
  }
  return context
}
