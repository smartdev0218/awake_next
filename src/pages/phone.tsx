import React, { useEffect } from 'react'
import { NextPage } from 'next/types'
import { useRouter } from 'next/router'
import PhoneInput from 'react-phone-input-2'

import { useAuth } from 'context/auth'
import { useUserInfo } from 'context/user-info'
import { Button, Card, Container, Text12 } from 'components/common'
import { Layout } from 'components/layout'

import 'react-phone-input-2/lib/style.css'

const Phone: NextPage = () => {
  const router = useRouter()
  const { signInWithSMS } = useAuth()
  const {
    userName,
    phoneNumber,
    setPhoneNumber,
    setVerificationCode,
  } = useUserInfo()

  useEffect(() => {
    if (userName == '' && typeof router.query.from === 'undefined')
      router.push('/signup')
  }, [])

  const handleClickContinue = async () => {
    signInWithSMS({
      phoneNumber: phoneNumber,
    })
      .then(({ data }) => {
        setVerificationCode(data.verificationCode)
        router.push('/verification')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const handleChangePhoneNumber = (phone) => {
    setPhoneNumber(phone)
  }

  return (
    <Layout>
      <Container maxWidth="sm">
        <Card>
          <div className="form-container">
            <p className="title">Phone number!</p>
            <p className="subtitle">
              Please enter your phone number so you can get verification code.
            </p>
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              containerStyle={{
                width: 'fit-content',
                margin: '26px 0',
              }}
              inputStyle={{ height: '48px' }}
            />
            <Button
              title="Continue"
              onClick={handleClickContinue}
              disabled={!phoneNumber}
            />
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

export default Phone
