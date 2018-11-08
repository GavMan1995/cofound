import React, { Component } from 'react'
import { Grid, Card, CardContent, Typography, TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import history from '../helpers/history'
import { auth } from '../firebase'
import styles from '../styles'

export default withStyles(styles)(class extends Component {
  state = {
    email: '',
    password: '',
    form: 'signin'
  }

  render () {
    const { classes } = this.props
    const { form } = this.state

    return (
      <Grid container className={classNames(classes.fullHeight, classes.gradientBG)} justify='center' alignItems='center'>
        <Card>
          <CardContent>
            <Typography align='center' className={classes.marginBottom2} variant='title'>
              {form === 'signin' ? 'Sign In' : 'Sign Up'}
            </Typography>
            <form onSubmit={form === 'signin' ? this.signin : this.signup}>
              <TextField fullWidth onChange={this.onInputChange('email')} type='email' label='email' />
              <TextField fullWidth onChange={this.onInputChange('password')} type='password' label='password' />
              <Grid container justify='center'>
                <Button className={classes.marginTop2} type='submit' variant='contained' color='primary'>Submit</Button>
              </Grid>

              { form === 'signin' ? (
                <Typography className={classes.marginTop2} align='center'>
                  Dont have an account? <Button onClick={() => this.changeForm('signup')} color='primary'> Sign Up</Button>
                </Typography>
              ) : (
                <Typography className={classes.marginTop2} align='center'>
                  Already have an account? <Button onClick={() => this.changeForm('signin')} color='primary'> Sign In</Button>
                </Typography>
              )

              }
            </form>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  changeForm = form => {
    this.setState({ form })
  }

  signin = event => {
    event.preventDefault()
    const state = this.state
    console.log(state)

    auth.signIn(state.email, state.password)
      .then(res => history.push('/'))
      .catch(err => console.log(err))
  }

  signup = event => {
    event.preventDefault()
    const state = this.state
    console.log(state)

    auth.createUser(state.email, state.password)
      .then(res => history.push('/signup'))
      .catch(err => console.log(err))
  }

  onInputChange = name => event => {
    this.setState({ [name]: event.target.value })
  }
})
