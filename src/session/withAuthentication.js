import React from 'react'
import PropTypes from 'prop-types'

import { firebase } from '../firebase'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = { authUser: null }

    render () {
      return <Component {...this.props} />
    }

    getChildContext () {
      return { authUser: this.state.authUser }
    }

    componentDidMount () {
      firebase.auth.onAuthStateChanged(authUser => (
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }))
      ))
    }
  }

  WithAuthentication.childContextTypes = {
    authUser: PropTypes.object
  }

  return WithAuthentication
}

export default withAuthentication
