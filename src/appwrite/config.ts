import {Client, Databases, Account} from 'appwrite'
import { APPWRITE_PROJECT_ID,APPWRITE_URL } from '../config/config'

const client = new Client()

client
.setEndpoint(APPWRITE_URL)
.setProject(APPWRITE_PROJECT_ID)

export const databases = new Databases(client)
export const account = new Account (client)