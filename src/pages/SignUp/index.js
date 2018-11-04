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
  Button
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { formats, modules } from '../../helpers/reactQuill'
import styles from '../../styles'

export default withStyles(styles)(class extends Component {
  state = {
    skillIdeaDesc: '',
    role: 'skills',
    userName: '',
    fullName: '',
    aboutMe: '',
    keyword: '',
    keywords: [],
    profileImg: ''
  }

  render () {
    const { classes } = this.props
    const { skillIdeaDesc, role, userName, fullName, aboutMe, keywords, profileImg, keyword } = this.state
    console.log(keywords)

    return (
      <Card>
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={12} md={3}>
              img
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField fullWidth value={userName} onChange={this.handleInputChange('userName')}label='User Name' />
              <TextField fullWidth value={fullName} onChange={this.handleInputChange('fullName')}label='Full Name' />
              <TextField fullWidth value={aboutMe} onChange={this.handleInputChange('aboutMe')}multiline label='About Me' />
            </Grid>

            <Grid item container className={classes.marginTop2} xs={12}>
              <Typography>
                Do you have an Idea and are looking for someone with the skills to help you with your idea?
                Or are you looking for someone with an idea that could use your skill set?
              </Typography>

              <Grid item xs={12} md={4}>
                <RadioGroup value={role} onChange={this.handleInputChange('role')}>
                  <FormControlLabel value='skills' control={<Radio />} label='I have dem skills' />
                  <FormControlLabel value='idea' control={<Radio />} label='I have an Idea' />
                </RadioGroup>
              </Grid>

              <Grid item xs={12} md={8}>
                <form onSubmit={this.addKeyword}>
                  <TextField
                    fullWidth
                    value={keyword}
                    onChange={this.handleInputChange('keyword')}
                    label={`Enter keywords here for your ${role} (press enter each keyword)`} />
                </form>

                {keywords.map(word => (
                  <Typography>{word}</Typography>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='title'>Add the description for your {role} here</Typography>
              <ReactQuill
                modules={modules}
                formats={formats}
                className={classes.reactQuill}
                theme='snow'
                value={skillIdeaDesc}
                onChange={event => this.handleInputChange('skillIdeaDesc')} />
            </Grid>

            <Grid item xs={12} container justify='center'>
              <Button variant='contained' color='primary'>Submit</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }

  addKeyword = event => {
    event.preventDefault()

    this.setState({ keywords: [...this.state.keywords, this.state.keyword], keyword: '' })
  }

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value })
  }
})
