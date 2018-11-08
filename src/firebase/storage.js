import { storage } from './config'
const storageRef = storage.ref()

export const uploadImage = file =>
  storageRef.child('images').put(file)
