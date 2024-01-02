import 'dotenv/config'
import {openai, supabase} from './config.js'

import express from 'express'
const server = express()

const port = process.env.port || 3001
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})