import React from 'react'
import PropTypes from 'prop-types'

import history from '../helpers/history'
import { firebase } from '../firebase'

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    render () {
      return this.context.authUser ? <Component {...this.props} /> : null
    }

    componentDidMount () {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          history.push('/signin')
        }
      })
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object
  }

  return WithAuthorization
}

export default withAuthorization
