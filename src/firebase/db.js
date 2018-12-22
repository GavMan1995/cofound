import { db } from './config'
import * as firebase from 'firebase'
import 'firebase/firestore'

// User API
export const updateUser = (id, username, firstname, lastname, aboutme) =>
  db.collection('users').doc(id).set({
    username,
    firstname,
    lastname,
    aboutme
  })

export const addUserToIdeaUsers = id =>
  db.collection('ideaUsers').doc(id).set({})

export const addUserToSkillUsers = id =>
  db.collection('skillUsers').doc(id).set({})

export const addUserToAttributes = (attribute, id) =>
  db.collection('attributes').doc(attribute).collection('users').doc(id).set({})

export const addUserToKeywords = (keyword, id) =>
  db.collection('keywords').doc(keyword).collection('users').doc(id).set({})

export const addSkillIdeaDescription = (id, desc) =>
  db.collection('users').doc(id).update({
    skillIdeaDescription: desc
  })

// Other API
export const addAttribute = att =>
  db.collection('attributes').doc(att).set({})

export const addKeyword = word =>
  db.collection('keywords').doc(word).set({})

export const getAttributes = () =>
  db.collection('attributes').get()

export const getKeywords = () =>
  db.collection('keywords').get()
