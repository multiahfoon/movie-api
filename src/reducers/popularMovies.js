import { POPULAR_MOVIES } from '../actions'

const popularMovies = (state = [], action) => {
  switch (action.type) {
    case POPULAR_MOVIES:
      return action.popularMovies
    default: 
      return state
  }
}

export default popularMovies