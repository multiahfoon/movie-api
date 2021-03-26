import { combineReducers } from 'redux'

import popularMovies from './popularMovies'
import searchMovie from './searchMovie'
import movieDetails from './movieDetails'

export default combineReducers ({
  popularMovies,
  searchMovie,
  movieDetails
})

