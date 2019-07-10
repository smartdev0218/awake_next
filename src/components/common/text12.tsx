import React from 'react'
import { NextPage } from 'next/types'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
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

interface Props {
  text: string
}

const Text12: NextPage<Props> = (Props) => {
  const classes = useStyles()

  return <Typography className={classes.container}>{Props.text}</Typography>
}

export default Text12
