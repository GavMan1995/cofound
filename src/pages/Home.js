import React, { Component } from 'react'

import { auth } from '../firebase'

export default class extends Component {
  render () {
    return (
      <div>
        Home
        <button onClick={auth.signOut}>Sign Out</button>
      </div>
    )
  }
}
