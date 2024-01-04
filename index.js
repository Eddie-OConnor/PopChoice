// index.js

import {openai, supabase, config} from './config.js'

const submitBtn = document.getElementById('submit-btn')
const favMovie = document.getElementById('favorite-movie')
const movieMood = document.getElementById('movie-mood')
const funOrSerious = document.getElementById('fun-or-serious-movie')

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    fetchConfigAndRunMain()
    console.log('hello')
})

function fetchConfigAndRunMain(){
    openai.config.apiKey = config.openaiApiKey
    supabase.auth.setAuth(config.supabaseApiKey)

    const favMovieInput = favMovie.value
    const movieMoodInput = movieMood.value
    const funOrSeriousInput = funOrSerious.value

    returnMovie(favMovieInput, movieMoodInput, funOrSeriousInput)
}


async function returnMovie(favMovie, movieMood, funOrSerious) {
    try {
        const embedding = await createEmbedding(favMovie, movieMood, funOrSerious)
        const match = await findNearestMatch(embedding)
        console.log(favMovie, movieMood, funOrSerious)
        console.log(embedding)
        console.log(match)
    } catch (error){
        console.error('error in main function.', error.message)
    }
}

async function createEmbedding(favMovie, movieMood, funOrSerious){
    const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        favMovie, movieMood, funOrSerious
    })
    return embeddingResponse.data[0].embedding
}

async function findNearestMatch(embedding){
    const {data} = await supabase.rpc('match_movies', {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 1
    })
}