import React from 'react'
import { NextPage } from 'next/types'
import { useRouter } from 'next/router'

import { Button, Card, Container, Text12 } from 'components/common'
import { Layout } from 'components/layout'

const Signin: NextPage = () => {
  const router = useRouter()

  const onClicked = (e) => {
    router.push({ pathname: '/phone', query: { from: 'signin' } })
  }

  return (
    <Layout>
      <Container maxWidth="sm">
        <Card>
          <div className="form-container">
            <p className="title">
              Welcome to <b>Awake!</b>
            </p>
            <p className="subtitle">
              Awake generates money from ads using this data, companies can
              create ads.
            </p>
            <Button title="Sign in to awake" onClick={onClicked} />
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

export default Signin
