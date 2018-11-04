import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import history from '../helpers/history'
import { firebase } from '../firebase'
import styles from '../styles'
import AppBar from './AppBar'

const PrivateRoute = class extends Component {
  state = { user: null }

  render () {
    const { user } = this.state
    const { component: Component, classes, ...rest } = this.props

    return <Route {...rest} render={props => user
      ? <Fragment>
        <AppBar user={user} />
        <div className={classes.pageWrapper}>
          <Component {...props} user={user} />
        </div>
      </Fragment>
      : null} />
  }

  componentDidMount () {
    firebase.auth.onAuthStateChanged(authUser => {
      if (!authUser) {
        this.setState({ user: null })
        history.push('/signin')
      } else {
        this.setState({ user: authUser })
      }
    })
  }
}

export default withStyles(styles)(PrivateRoute)
