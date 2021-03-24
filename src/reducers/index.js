import { combineReducers } from 'redux'

import popularMovies from './popularMovies'
import searchMovie from './searchMovie'

export default combineReducers ({
  popularMovies,
  searchMovie
})

