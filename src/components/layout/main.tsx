import { Container, makeStyles } from '@material-ui/core'

import Header from './header'
import Footer from './footer'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background:
      'linear-gradient(#343F45 0%, #3D4A51 25.22%, #37454B 42.71%, #2E3C43 74.11%, #1F2B31 100%)',
  },
}))

const Main = ({ children }) => {
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth={false}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Main
