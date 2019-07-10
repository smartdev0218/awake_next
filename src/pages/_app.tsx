import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from 'context/auth'
import { UserInfoProvider } from 'context/user-info'
import { Loading } from 'components/common'
import { GlobalStyles, Theme, MaterialUITheme } from 'styles'

function Application({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UserInfoProvider>
        <GlobalStyles />
        <MaterialUIThemeProvider theme={MaterialUITheme}>
          <ThemeProvider theme={Theme}>
            <Loading>
              <Component {...pageProps} />
            </Loading>
          </ThemeProvider>
        </MaterialUIThemeProvider>
      </UserInfoProvider>
    </AuthProvider>
  )
}

export default Application
