import axios from 'axios'

import { dispatch } from '../../store'
import  setMovies  from '../../actions'

export function getMovies () {
  axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.react_app_apikey}`)
    .then(popularMovies => {
      dispatch(setMovies(popularMovies.data.results))
      return null
    })
    .catch(err => console.error(err))
}  
