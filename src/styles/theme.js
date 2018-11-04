
import { createMuiTheme } from '@material-ui/core/styles'
import colors from '../variables/colors'

export default createMuiTheme({
  palette: {
    primary: {
      main: colors.primaryMain,
      contrastText: colors.paper
    },

    secondary: {
      main: colors.secondaryMain
    },

    red: {
      main: colors.red,
      dark: colors.redDark
    },

    green: {
      main: colors.green,
      dark: colors.greenDark
    },

    yellow: {
      main: colors.yellow,
      dark: colors.yellowDark
    }
  },

  shape: {
    borderRadius: 8
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: 25
      }
    }
  }
})
