import 'dotenv/config'
import express from 'express'
import {openai, supabase} from './config.js'

const server = express()

dotenv.config()

server.get('/config', (req, res) => {
    res.json({
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
        SUPABASE_URL: process.env.SUPABASE_URL 
    })
})

const port = process.env.port || 3001
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
