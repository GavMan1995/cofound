import { db } from './config'

// User API

export const createUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  })

export const onceGetUsers = () =>
  db.ref('users').once('value')

// Other db APIs ...
