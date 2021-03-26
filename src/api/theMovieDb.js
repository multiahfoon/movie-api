import axios from 'axios'

import { dispatch } from '../store'
import { popularMovies, searchMovie, movieDetails } from '../actions'

const apiKey = process.env.react_app_apikey
const clear = []
export function getPopularMovies () {
  axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(movies => {
      dispatch(popularMovies(movies.data.results))
      dispatch(searchMovie(clear))
      dispatch(movieDetails(clear))
      return null
    })
    .catch(err => console.error(err))
}  

export function getSearchMovie (movie) {
  axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}&language=en-US&page=1&include_adult=false`)
    .then(movieFound => {
      dispatch(searchMovie(movieFound.data.results))
      dispatch(popularMovies(clear))
    })
    .catch(err => console.error(err))
}


export function getMovieDetails (id) {
  axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(details => {
      dispatch(movieDetails(details.data))
      dispatch(searchMovie(clear))
      dispatch(popularMovies(clear))
    })
    .catch(err => console.error(err))
}
