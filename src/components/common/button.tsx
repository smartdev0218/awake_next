import React from 'react'
import { NextPage } from 'next/types'
import { Button as MUIButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  button: theme.button,
}))

interface Props {
  title: string
  onClick: any
  disabled?: any
}

const Button: NextPage<Props> = (Props) => {
  const classes = useStyles()

  return (
    <MUIButton
      className={classes.button}
      disabled={Props.disabled}
      type="submit"
      variant="contained"
      onClick={(e) => Props.onClick(e)}
    >
      {Props.title}
    </MUIButton>
  )
}

export default Button
