//require("dotenv").config();
//const { neon } = require("@neondatabase/serverless");
import 'dotenv/config'
import express from 'express'
import { neon } from '@neondatabase/serverless'

const app = express();
export const sql = neon(process.env.DATABASE_URL);