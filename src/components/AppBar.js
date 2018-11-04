import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Button
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

import { auth } from '../firebase'
import styles from '../styles/AppBarStyles'

export default withStyles(styles)(class extends Component {
  render () {
    const { classes, user } = this.props

    return (
      <AppBar className={classes.AppBar} position='static'>
        <Toolbar>
          <Grid container justify='space-between'>
            <IconButton color='inherit' aria-label='Menu'>
              <Menu />
            </IconButton>
            {user
              ? <Button onClick={auth.signOut} color='inherit'>Sign Out</Button>
              : <Link to='/signin'><Button color='inherit'>Sign In</Button></Link>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
})
