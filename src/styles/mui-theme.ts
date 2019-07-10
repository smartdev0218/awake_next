import { createMuiTheme, Theme } from '@material-ui/core'
// import { container, title } from "../assets/jss/material-kit-react.js";

export interface CustomTheme extends Theme {
  container: {
    color: string
    zIndex: number
  }
}

const defaultTheme = createMuiTheme({})

const defaultThemeContext: CustomTheme = {
  ...defaultTheme,
  container: {
    color: '#fff',
    zIndex: 12,
    // ...container
  },
  main: {
    background: '#fff',
    // position: "relative",
    zIndex: '3',
  },
  mainRaised: {
    margin: '80px 0px 0px 0px',
    borderRadius: '6px',
    // boxShadow:
    //   "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  // palette: {
  // textColor: '#546E7A',
  // borderColor: '#F1F1F5',
  // orangeColor: '#FF7534',
  // darkBlue: '#37474F',
  // },
  textfield: {
    font: '14px',
    lineHeight: '16.41px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontColor: '#44444F',
    color: '#44444F',
    textAlign: 'center',
    // borderRadius: '20px',
    borderColor: '#CFD8DC',
    backgroundColor: '#FFFFFF',
    width: '100%',
    margin: '26px 0',
    textTransform: 'none',

    [`& fieldset`]: {
      borderRadius: '15px',
    },
  },
  button: {
    font: '15px',
    lineHeight: '17.58px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontColor: '#FFFFFF',
    color: '#FFFFFF',
    textAlign: 'center',
    borderRadius: '10px',
    backgroundColor: '#FF7534',
    width: '200px',
    height: '60px',
    textTransform: 'none',
  },
}

export default defaultThemeContext
