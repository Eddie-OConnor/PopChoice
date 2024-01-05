// config.js

import OpenAI from 'openai'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config()


/** OpenAI config */
if (!process.env.OPENAI_API_KEY) throw new Error("OpenAI API key is missing or invalid.")
const openaiApiKey = process.env.OPENAI_API_KEY
export const openai = new OpenAI({
  apiKey: openaiApiKey,
  dangerouslyAllowBrowser: true
});

/** Supabase config */
const supabaseApiKey = process.env.SUPABASE_API_KEY
if (!supabaseApiKey) throw new Error(`Expected env var SUPABASE_API_KEY`)
const supabaseUrl = process.env.SUPABASE_URL
if (!supabaseUrl) throw new Error(`Expected env var SUPABASE_URL`)
export const supabase = createClient(supabaseUrl, supabaseApiKey)

export const config = {
  openaiApiKey,
  supabaseApiKey,
  supabaseUrl
}