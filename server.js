// server.js
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
// console.log(process.env);

const server = express()

server.get('/config', (req, res) => {
    res.json({
        openaiApiKey: process.env.OPENAI_API_KEY,
        supabaseApiKey: process.env.SUPABASE_API_KEY,
        supabaseUrl: process.env.SUPABASE_URL
    })
})

const port = process.env.port || 3001
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
