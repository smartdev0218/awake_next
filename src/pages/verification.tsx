import React from 'react'
import { NextPage } from 'next/types'
import { useRouter } from 'next/router'

import { useAuth } from 'context/auth'
import { useUserInfo } from 'context/user-info'
import { Button, Card, Container, Text12 } from 'components/common'
import { VerificationForm } from 'components/form'
import { Layout } from 'components/layout'

const Verification: NextPage = () => {
  const router = useRouter()
  const { confirmSMS } = useAuth()
  const { setPhoneNumber, userName, verificationCode, phoneNumber } = useUserInfo()
  console.log(useUserInfo);

  const handleClickResend = () => {
    setPhoneNumber('')
    router.push('/phone')
  }

  const handleVerifyCode = (code) => {
    if (userName === null) {
      confirmSMS({
        smsCode: code,
        verificationId: verificationCode,
        phoneNumber: phoneNumber,
      })
        .then((res) => {
          console.log(res)
          alert(res.user.username + "logged in successfully!")
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      confirmSMS({
        smsCode: code,
        verificationId: verificationCode,
        phoneNumber: phoneNumber,
        username: userName
      })
        .then((res) => {
          console.log(res)
          alert(res.user.username + "registered successfully!")
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <Layout>
      <Container maxWidth="sm">
        <Card>
          <div className="form-container">
            <p className="title">Verification</p>
            <p className="subtitle">We sent you an SMS code on number.</p>
            <p className="phonenumber">{phoneNumber}</p>
            <VerificationForm fields={4} onComplete={handleVerifyCode} />
            <Button title="Re-send code" onClick={handleClickResend} />
          </div>
          <div className="bottom-container">
            <p>
              Can't login? •{' '}
              <span
                className="orange-text"
                onClick={() => router.push('/signup')}
              >
                Sign up for new user
              </span>
            </p>
          </div>
        </Card>
        <Text12 text={'Privacy policy - Terms of use'} />
      </Container>
    </Layout>
  )
}

export default Verification
