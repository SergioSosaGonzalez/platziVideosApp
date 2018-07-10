const BASE_API = 'https://yts.am/api/v2/'

class Api {
    async getSuggestions( id ){
        const query = await fetch( `${BASE_API}movie_suggestions.json?movie_id=${id}` )
        if( query.status !== 200 ){
            return [] // early return   
        }
        const {data}  = await query.json()
console.log(data.movies)
        return data.movies
    }
    async getMovies(){
        const query = await fetch( `${BASE_API}list_movies.json` )
        if( query.status !== 200 ){
            return [] // early return   
        }
        const {data}  = await query.json()
console.log(data.movies)
        return data.movies
    }
}

export default new Api()