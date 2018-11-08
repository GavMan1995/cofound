import * as firebase from 'firebase'
import 'firebase/firestore'

const prodConfig = {
  apiKey: 'AIzaSyC3ZmtC3sw7tfvoTnDQ77MD5GzrY3K0gb4',
  authDomain: 'cofound-cd104.firebaseapp.com',
  databaseURL: 'https://cofound-cd104.firebaseio.com',
  projectId: 'cofound-cd104',
  storageBucket: 'cofound-cd104.appspot.com',
  messagingSenderId: '691917023408'
}

const devConfig = {
  apiKey: 'AIzaSyC3ZmtC3sw7tfvoTnDQ77MD5GzrY3K0gb4',
  authDomain: 'cofound-cd104.firebaseapp.com',
  databaseURL: 'https://cofound-cd104.firebaseio.com',
  projectId: 'cofound-cd104',
  storageBucket: 'cofound-cd104.appspot.com',
  messagingSenderId: '691917023408'
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()
const auth = firebase.auth()

const settings = { timestampsInSnapshots: true }
db.settings(settings)

export {
  db,
  auth
}
