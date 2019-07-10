import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '48px',
  },
  grid: {
    display: 'flex',
  },
  logo_titles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: -10,
  },
  logo_sm: {
    width: '50%',
    alignSelf: 'flex-end',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth="xs">
      <Grid container direction={'row'} justify={'center'} item xs={12}>
        <img src="/logo.png" height={'98.84'} />
        <Grid className={classes.logo_titles}>
          <img src="/logo-title.png" height={'30.79'} />
          <img src="/logo-small-title.png" className={classes.logo_sm} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header
