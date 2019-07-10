import React, { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import cookieCutter from 'cookie-cutter'

import { useAuth } from 'context/auth'
import { findDevServerUrl, loadedUrl } from 'utils/axios-client'

import loadingAnimation from './loading-animation.json'

/**
 * App Loading screen.
 */
const Loading = ({ children }: any) => {
  const [isAuthLoaded, setAuthLoaded] = useState(false)
  const { jwt, fetchUser, logout } = useAuth()

  useEffect(() => {
    findDevServerUrl()
      .then((url) => {
        cookieCutter.set('server-url', url)
        return
      })
      .finally(() => {
        setAuthLoaded(true)
        if (loadedUrl) {
          if (jwt) {
            fetchUser()
          }
        }
      })
      .catch((e) => {
        console.error('Error on load', e)
        if (e?.response?.data?.statusCode === 'unauthorised') {
          logout()
          // dispatchModal({
          //     type: 'add',
          //     modal: <ModalError text={getLanguage().youWereLoggedOut} />
          // })
        }
      })
  }, [])

  return (
    <div>
      {isAuthLoaded ? (
        children
      ) : (
        <div className="centerLoading">
          <Player
            autoplay
            loop
            src={loadingAnimation}
            style={{
              height: 400,
              width: 400,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Loading
