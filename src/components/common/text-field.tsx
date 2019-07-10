import React from 'react'
import { NextPage } from 'next/types'
import { makeStyles, TextField as MUITextField } from '@material-ui/core'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    // "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "green"
    // },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      // borderColor: theme.palette.orangeColor,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      // borderColor: theme.palette.orangeColor,
    },
    // "& .MuiOutlinedInput-input": {
    //   color: "green"
    // },
    // "&:hover .MuiOutlinedInput-input": {
    //   color: "red"
    // },
    // "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    //   color: "purple"
    // },
    // "& .MuiInputLabel-outlined": {
    //   color: "green"
    // },
    // "&:hover .MuiInputLabel-outlined": {
    //   color: "red"
    // },
    '& .MuiInputLabel-outlined.Mui-focused': {
      // color: theme.palette.orangeColor,
    },
  },
  // textfield: theme.textfield,
  textField: {},
}))

interface Props {
  onChange?: any
  placeholder?: string
}

const TextField: NextPage<Props> = (props: Props) => {
  const classes = useStyles()

  return (
    <MUITextField
      className={classNames(classes.textField, classes.root)}
      required
      id="outlined-required"
      label="Full name"
      placeholder={props.placeholder}
      variant="outlined"
      onChange={(e) => props.onChange(e)}
    />
  )
}

export default TextField
