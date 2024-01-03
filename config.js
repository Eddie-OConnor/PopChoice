// config.js

import dotenv from 'dotenv'
dotenv.config()

import OpenAI from 'openai'
// const OpenAI = require('openai')
import { createClient } from "@supabase/supabase-js"
// const createClient = require('@supabase/supabase-js')

/** OpenAI config */
if (!process.env.OPENAI_API_KEY) throw new Error("OpenAI API key is missing or invalid.");
const openaiApiKey = process.env.OPENAI_API_KEY
export const openai = new OpenAI({
  apiKey: openaiApiKey,
  // dangerouslyAllowBrowser: true
});

/** Supabase config */
if (!supabaseApiKey) throw new Error(`Expected env var SUPABASE_API_KEY`);
const supabaseApiKey = process.env.SUPABASE_API_KEY;
if (!supabaseUrl) throw new Error(`Expected env var SUPABASE_URL`);
const supabaseUrl = process.env.SUPABASE_URL;
export const supabase = createClient(supabaseUrl, supabaseApiKey);

export const config = {
  openaiApiKey,
  supabaseApiKey,
  supabaseUrl
};

// do we need this file? could everything be handled in server?