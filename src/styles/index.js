// === This will contain both the JSS and the Styled Components with a global context ===\\
// === Using styled components because you cant ...spread two JSS files together and still have theme available === \\
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import colors from '../variables/colors'

export default theme => ({
  // Page Wrapper
  pageWrapper: {
    marginLeft: 50,
    padding: theme.spacing.unit * 3,
    transition: 'margin 0.2s',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      padding: theme.spacing.unit
    }
  },

  pageWrapperOpen: {
    marginLeft: 220,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },

  scrollY: {
    overflowY: 'scroll'
  },

  scrollX: {
    overflowX: 'scroll'
  },

  tabsContainer: {
    backgroundColor: '#fff',
    borderRadius: 4
  },

  horizontalRadio: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  hideOnSmallDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  hideOnSmallUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },

  whiteTextChildren: {
    '& *': {
      color: '#fff'
    }
  },

  whiteText: {
    color: '#fff'
  },

  imgContainer: {
    width: '100%',
    maxWidth: 200,

    '& > img': {
      width: '100%',
      height: 'auto'
    }
  },

  reactQuill: {
    marginTop: theme.spacing.unit,
    minHeight: 200,

    '& .ql-container': {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4
    },

    '& .ql-toolbar': {
      backgroundColor: theme.palette.secondary.light1,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },

    '& .ql-container, & .ql-editor': {
      minHeight: 200
    }
  },

  cursorPointer: {
    cursor: 'pointer'
  },

  // Grid
  gridNoNegativeMargin: {
    margin: 0
  },

  firstOnSmallDown: {
    [theme.breakpoints.down('sm')]: {
      order: -1
    }
  },

  // Spacing and Sizing
  halfWidth: {
    width: '50%'
  },

  fullWidth: {
    width: '100%'
  },

  halfHeight: {
    height: '50%'
  },

  fullHeight: {
    height: '100%'
  },

  noHeight: {
    height: 0
  },

  fullMaxWidth: {
    maxWidth: '100%'
  },

  halfMaxWidth: {
    maxWidth: '50%'
  },

  noMaxWidth: {
    maxWidth: 'none'
  },

  minWidth50: {
    minWidth: 50
  },

  minWidth100: {
    minWidth: 100
  },

  minWidth200: {
    minWidth: 200
  },

  minWidth300: {
    minWidth: 300
  },

  minWidth400: {
    minWidth: 400
  },

  maxWidth50: {
    maxWidth: 50
  },

  maxWidth100: {
    maxWidth: 100
  },

  maxWidth200: {
    maxWidth: 200
  },

  maxWidth300: {
    maxWidth: 300
  },

  maxWidth400: {
    maxWidth: 400
  },

  noMargin: {
    margin: 0
  },

  noMarginTop: {
    marginTop: 0
  },

  noMarginRight: {
    marginRight: 0
  },

  noMarginBottom: {
    marginBottom: 0
  },

  noMarginLeft: {
    marginLeft: 0
  },

  margin1: {
    margin: theme.spacing.unit
  },

  margin2: {
    margin: theme.spacing.unit * 2
  },

  margin3: {
    margin: theme.spacing.unit * 3
  },

  margin4: {
    margin: theme.spacing.unit * 4
  },

  marginTop1: {
    marginTop: theme.spacing.unit
  },

  marginTop2: {
    marginTop: theme.spacing.unit * 2
  },

  marginTop3: {
    marginTop: theme.spacing.unit * 3
  },

  marginTop4: {
    marginTop: theme.spacing.unit * 4
  },

  marginTop5: {
    marginTop: theme.spacing.unit * 5
  },

  marginRight1: {
    marginRight: theme.spacing.unit
  },

  marginRight2: {
    marginRight: theme.spacing.unit * 2
  },

  marginRight3: {
    marginRight: theme.spacing.unit * 3
  },

  marginRight4: {
    marginRight: theme.spacing.unit * 4
  },

  marginBottom1: {
    marginBottom: theme.spacing.unit
  },

  marginBottom2: {
    marginBottom: theme.spacing.unit * 2
  },

  marginBottom3: {
    marginBottom: theme.spacing.unit * 3
  },

  marginBottom4: {
    marginBottom: theme.spacing.unit * 4
  },

  marginLeft1: {
    marginLeft: theme.spacing.unit
  },

  marginLeft2: {
    marginLeft: theme.spacing.unit * 2
  },

  marginLeft3: {
    marginLeft: theme.spacing.unit * 3
  },

  marginLeft4: {
    marginLeft: theme.spacing.unit * 4
  },

  marginTopBottom1: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },

  marginTopBottom2: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },

  marginTopBottom3: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },

  marginTopBottom4: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  },

  marginLeftRight1: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },

  marginLeftRight2: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  },

  marginLeftRight3: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },

  marginLeftRight4: {
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4
  },

  noPadding: {
    padding: 0
  },

  noPaddingTop: {
    paddingTop: 0
  },

  noPaddingRight: {
    paddingRight: 0
  },

  noPaddingBottom: {
    paddingBottom: 0
  },

  noPaddingLeft: {
    paddingLeft: 0
  },

  padding1: {
    padding: theme.spacing.unit
  },

  padding2: {
    padding: theme.spacing.unit * 2
  },

  padding3: {
    padding: theme.spacing.unit * 3
  },

  padding4: {
    padding: theme.spacing.unit * 4
  },

  paddingTop1: {
    paddingTop: theme.spacing.unit
  },

  paddingTop2: {
    paddingTop: theme.spacing.unit * 2
  },

  paddingTop3: {
    paddingTop: theme.spacing.unit * 3
  },

  paddingTop4: {
    paddingTop: theme.spacing.unit * 4
  },

  paddingRight1: {
    paddingRight: theme.spacing.unit
  },

  paddingRight2: {
    paddingRight: theme.spacing.unit * 2
  },

  paddingRight3: {
    paddingRight: theme.spacing.unit * 3
  },

  paddingRight4: {
    paddingRight: theme.spacing.unit * 4
  },

  paddingBottom1: {
    paddingBottom: theme.spacing.unit
  },

  paddingBottom2: {
    paddingBottom: theme.spacing.unit * 2
  },

  paddingBottom3: {
    paddingBottom: theme.spacing.unit * 3
  },

  paddingBottom4: {
    paddingBottom: theme.spacing.unit * 4
  },

  paddingLeft1: {
    paddingLeft: theme.spacing.unit
  },

  paddingLeft2: {
    paddingLeft: theme.spacing.unit * 2
  },

  paddingLeft3: {
    paddingLeft: theme.spacing.unit * 3
  },

  paddingLeft4: {
    paddingLeft: theme.spacing.unit * 4
  },

  paddingTopBottom1: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },

  paddingTopBottom2: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  paddingTopBottom3: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  },

  paddingTopBottom4: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  },

  paddingLeftRight1: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },

  paddingLeftRight2: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },

  paddingLeftRight3: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },

  paddingLeftRight4: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4
  },

  // Coloring
  greenButton: {
    backgroundColor: theme.palette.green.main,

    '&:hover': {
      backgroundColor: theme.palette.green.dark
    }
  },

  redButton: {
    backgroundColor: theme.palette.red.main,
    color: '#fff',

    '&:hover': {
      backgroundColor: theme.palette.red.dark
    }
  },

  grayCard: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 8,
    overflow: 'hidden',
    transition: 'box-shadow 0.2s'
  },

  blueCard: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8,
    overflow: 'hidden'
  },

  darkBG: {
    backgroundColor: colors.secondaryDark3
  },

  whiteBG: {
    backgroundColor: '#fff'
  },

  grayBG: {
    backgroundColor: theme.palette.secondary.light
  },

  // Cards
  profileCard: {
    position: 'relative',
    marginTop: 74,
    paddingTop: 60,
    overflow: 'visible'
  },

  profileCardSmall: {
    marginTop: 40
  },

  profileCardImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -60,
    left: 'calc(50% - 60px)',
    width: 112,
    height: 112,
    padding: theme.spacing.unit / 2,
    backgroundColor: '#fff',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '50%',
    boxShadow: theme.shadows[10],

    '& > img': {
      width: '100%',
      height: 'auto'
    }
  },

  linkCard: {
    cursor: 'pointer',

    '&:hover': {
      boxShadow: theme.shadows[8]
    }
  },

  cardSelect: {
    position: 'absolute',
    top: 8,
    left: 4
  },

  cardMore: {
    position: 'absolute',
    top: -2,
    right: 8,
    cursor: 'pointer',
    fontSize: 32
  },

  cardClose: {
    position: 'absolute',
    top: 0,
    right: 0
  },

  cardEdit: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 0,
    backgroundColor: theme.palette.secondary.light,
    visibility: 'hidden',
    transition: 'height 0.2s'
  },

  cardEditOpen: {
    display: 'initial',
    height: '100%',
    visibility: 'initial',
    transition: 'height 0.2s'
  }
})

export const RedButton = styled(Button)`
  &&{
    color: #fff;
    background-color: ${colors.red};
    &:hover {
      background-color: ${colors.redDark};
    }
  }
`

export const GreenButton = styled(Button)`
  &&{
    color: #fff;
    background-color: ${colors.green};
    &:hover {
      background-color: ${colors.greenDark};
    }
  }
`

export const FlexVerticalCenter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`
