import React from 'react'
import { NextPage } from 'next/types'
import { useRouter } from 'next/router'

import { useUserInfo } from 'context/user-info'
import { Button, Card, Container, Text12, TextField } from 'components/common'
import { Layout } from 'components/layout'

const Signup: NextPage = () => {
  const router = useRouter()
  const { userName, setUserName } = useUserInfo()

  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleClickContinue = (e) => {
    router.push({ pathname: '/phone', query: { from: 'signup' } })
  }

  return (
    <Layout>
      <Container maxWidth="sm">
        <Card>
          <div className="form-container">
            <p className="title">Create New Account</p>
            <p className="subtitle">
              Please enter your full name so we can move to the next step :)
            </p>
            <TextField
              placeholder="e.g (John Doe)"
              onChange={handleChangeUserName}
            />
            <Button
              title="Continue"
              onClick={handleClickContinue}
              disabled={!userName}
            />
          </div>
          <div className="bottom-container">
            <p>
              Already have an account? {' - '}
              <span
                className="orange-text"
                onClick={() => router.push('/signin')}
              >
                Sign in
              </span>
            </p>
          </div>
        </Card>
        <Text12 text={'Privacy policy - Terms of use'} />
      </Container>
    </Layout>
  )
}

export default Signup
