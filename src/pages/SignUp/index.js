import React, { Component } from 'react'
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Chip
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { KeyboardArrowRight } from '@material-ui/icons'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'

import history from '../../helpers/history'
import { db, storage } from '../../firebase'
import styles from '../../styles'

export default withStyles(styles)(class extends Component {
  state = {
    profileImg: null,
    skillIdeaDesc: '',
    role: 'skills',
    userName: '',
    fullName: '',
    aboutMe: '',
    keyword: '',
    keywords: [],
    attribute: '',
    attributes: [],
    form: 0
  }

  render () {
    const { classes } = this.props
    const { skillIdeaDesc, role, userName, fullName, aboutMe, keywords, keyword, attribute, attributes, form, profileImg } = this.state

    return (
      <Card>
        <CardContent>
          {form === 0 &&
            <form onSubmit={this.submitUserForm}>
              <Grid container alignItems='center' spacing={24}>
                <Grid item className={classes.positionRelative} xs={12} md={3}>
                  <Typography align='center'>Add Profile Image</Typography>
                  <Dropzone
                    className={classNames(classes.fullWidth, classes.fullHeight, classes.cursorPointer)}
                    accept='image/jpeg, image/png'
                    onDrop={this.onDrop}>

                    <div className={classes.padding2}>
                      {profileImg
                        ? <img className={classes.fullWidth} src={profileImg} alt='' />
                        : <img className={classes.fullWidth} src='https://cdn3.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' alt='' />
                      }
                    </div>
                  </Dropzone>
                </Grid>

                <Grid item xs={12} md={9}>
                  <TextField fullWidth value={userName} onChange={this.handleInputChange('userName')} label='User Name' />
                  <TextField fullWidth value={fullName} onChange={this.handleInputChange('fullName')} label='Full Name' />
                  <TextField fullWidth value={aboutMe} onChange={this.handleInputChange('aboutMe')} multiline label='About Me' />
                </Grid>
              </Grid>

              <Grid container justify='center'>
                <Button type='submit' variant='contained' color='primary'>Next <KeyboardArrowRight /></Button>
              </Grid>
            </form>
          }

          {form === 1 &&
            <Grid container className={classes.marginTop2} spacing={24}>
              <Grid item xs={12}>
                <Typography variant='title'>Thank you for signing up!</Typography>
                <Typography>
                  Let us know a little bit about yourself and whether youre looking for someone with an idea, or someone to
                  help bring your idea to life.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <form className={classes.marginBottom1} onSubmit={this.addAttribute}>
                  <TextField
                    fullWidth
                    value={attribute}
                    onChange={this.handleInputChange('attribute')}
                    label={`Enter keywords here that describe yourself (press enter each keyword)`} />
                </form>

                {attributes.map((att, index) => (
                  <Chip key={att + index} label={att} onDelete={() => this.deleteAttribute(index)} />
                ))}
              </Grid>

              <Grid item container xs={12}>
                <Typography>
                  Do you have an Idea and are looking for someone with the skills to help you with your idea?
                  Or are you looking for someone with an idea that could use your skill set?
                </Typography>

                <Grid item xs={12} md={4}>
                  <RadioGroup value={role} onChange={this.handleInputChange('role')}>
                    <FormControlLabel value='skills' control={<Radio color='primary' />} label='I have dem skills' />
                    <FormControlLabel value='idea' control={<Radio color='primary' />} label='I have an Idea' />
                  </RadioGroup>
                </Grid>

                <Grid item xs={12} md={8}>
                  <form className={classes.marginBottom1} onSubmit={this.addKeyword}>
                    <TextField
                      fullWidth
                      value={keyword}
                      onChange={this.handleInputChange('keyword')}
                      label={`Enter keywords here for your ${role} (press enter each keyword)`} />
                  </form>

                  {keywords.map((word, index) => (
                    <Chip key={word + index} label={word} onDelete={() => this.deleteKeyword(index)} />
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography className={classes.marginBottom1} variant='title'>
                  Add the description for your {role} here
                </Typography>

                <TextField
                  multiline
                  rows={6}
                  placeholder='Great Idea/Skills'
                  className={classes.fullWidth}
                  variant='outlined'
                  value={skillIdeaDesc}
                  onChange={this.handleInputChange('skillIdeaDesc')} />
              </Grid>

              <Grid item xs={12} container justify='center'>
                <Button onClick={this.submitDetailsForm} variant='contained' color='primary'>Submit</Button>
              </Grid>
            </Grid>
          }
        </CardContent>
      </Card>
    )
  }

  submitDetailsForm = () => {
    const userID = this.props.user.uid
    const skillIdeaDesc = this.state.skillIdeaDesc

    if (this.state.role === 'skills') {
      db.addUserToSkillUsers(userID)
    } if (this.state.role === 'idea') {
      db.addUserToIdeaUsers(userID)
    }

    this.state.attributes.map(att => {
      db.addUserToAttributes(att, userID)
    })

    this.state.keywords.map(word => {
      db.addUserToKeywords(word, userID)
    })

    db.addSkillIdeaDescription(userID, skillIdeaDesc)

    history.push('/')
  }

  submitUserForm = event => {
    event.preventDefault()
    const state = this.state
    const firstname = state.fullName.split(' ')[0]
    const lastname = state.fullName.split(' ')[1]
    const username = state.userName
    const aboutMe = state.aboutMe

    if (state.fullName === '' || username === '' || aboutMe === '') {
      window.alert('Please fill out form before submitting')
    } else {
      db.updateUser(this.props.user.uid, username, firstname, lastname, aboutMe)
        .then(res => this.setState({ form: 1 }))
        .catch(err => window.alert('Error' + err))
    }
  }

  onDrop = acceptedFiles => {
    this.setState({ profileImg: acceptedFiles[0].preview })
  }

  deleteAttribute = index => {
    const attributes = this.state.attributes.slice()
    attributes.splice(index, 1)
    this.setState({ attributes })
  }

  addAttribute = event => {
    event.preventDefault()
    const att = this.state.attribute.split(' ').join('-')
    const attributes = []

    db.getAttributes()
      .then(querySnapshot => {
        querySnapshot.docs.map(doc => attributes.push(doc.id))
        if (!attributes.includes(att)) db.addAttribute(att)
      })
      .catch(error => window.alert(error))

    this.setState({ attributes: [...this.state.attributes, att], attribute: '' })
  }

  deleteKeyword = index => {
    const keywords = this.state.keywords.slice()
    keywords.splice(index, 1)
    this.setState({ keywords })
  }

  addKeyword = event => {
    event.preventDefault()
    const word = this.state.keyword.split(' ').join('-')
    const words = []

    db.getKeywords()
      .then(querySnapshot => {
        querySnapshot.docs.map(doc => words.push(doc.id))
        if (!words.includes(word)) db.addKeyword(word)
      })
      .catch(error => window.alert(error))

    this.setState({ keywords: [...this.state.keywords, word], keyword: '' })
  }

  handleQuillChange = (value) => {
    this.setState({ skillIdeaDesc: value })
  }

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  onDrop = acceptedFile => {
    console.log(acceptedFile[0].preview)
    storage.uploadImage(acceptedFile[0].preview)
      .then(snapshot => console.log(snapshot))
      .catch(err => console.log(err))

    this.setState({ profileImg: acceptedFile[0].preview })
  }
})
