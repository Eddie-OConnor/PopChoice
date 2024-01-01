import { openai, supabase } from './config.js';

const submitBtn = document.getElementById('submit-btn')
const favMovie = document.getElementById('favorite-movie-')
const movieMood = document.getElementById('movie-mood-')
const funOrSerious = document.getElementById('fun-or-serious-movie-')

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    main(favMovie.value, movieMood.value, funOrSerious.value)
})

async function main(favMovie, movieMood, funOrSerious) {
    try {
        const embedding = await createEmbedding(favMovie.value, movieMood.value, funOrSerious.value)
        // const match = await findNearestMatch(embedding)
        console.log(favMovie.value, movieMood.value, funOrSerious.value)
        console.log(embedding)
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

// async function findNearestMatch(embedding){
//     const {data} = await supabase.rpc('match_movies', {
//         query_embedding: embedding,
//         match_threshold: 0.5,
//         match_count: 1
//     })
// }