import faker from 'faker'
import { db } from '../firebase'

const faker = () => {
  for (let i = 0; i < 30; i++) {
    const name = faker.name.findName()
  }
}
