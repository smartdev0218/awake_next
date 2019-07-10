import { Container, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: 48,
  },
  grid: {
    display: 'flex',
  },
  title: {
    fontSize: '12px',
    lineHeight: '14.06px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontColor: '#A3B4BD',
    color: '#A3B4BD',
    textAlign: 'center',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth="xs">
      <Grid item xs={12}>
        <Typography className={classes.title}>
          © 2021 All rights Reserved. Awake Ltd.
        </Typography>
      </Grid>
    </Container>
  )
}

export default Footer
