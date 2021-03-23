import axios from 'axios'

import { dispatch } from '../store'
import { popularMovies } from '../actions'

const apiKey = process.env.react_app_apikey

export function getPopularMovies () {
  axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(movies => {
      dispatch(popularMovies(movies.data.results))
      return null
    })
    .catch(err => console.error(err))
}  
