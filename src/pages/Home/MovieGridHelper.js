import axios from 'axios'

import { dispatch } from '../../store'
import { popularMovies } from '../../actions'

export function getPopularMovies () {
  axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.react_app_apikey}`)
    .then(movies => {
      dispatch(popularMovies(movies.data.results))
      return null
    })
    .catch(err => console.error(err))
}  
