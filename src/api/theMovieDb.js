import axios from 'axios'

import { dispatch } from '../store'
import { popularMovies, searchMovie } from '../actions'

const apiKey = process.env.react_app_apikey

export function getPopularMovies () {
  axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(movies => {
      dispatch(popularMovies(movies.data.results))
      dispatch(searchMovie([]))
      return null
    })
    .catch(err => console.error(err))
}  

export function getSearchMovie (movie) {
  axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}&language=en-US&page=1&include_adult=false`)
    .then(movieFound => {
      dispatch(searchMovie(movieFound.data.results))
      dispatch(popularMovies([]))
    })
    .catch(err => console.error(err))
}

