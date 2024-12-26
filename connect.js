//require("dotenv").config();
//const { neon } = require("@neondatabase/serverless");
import 'dotenv/config'
import { neon } from '@neondatabase/serverless'

export const sql = neon(process.env.DATABASE_URL);