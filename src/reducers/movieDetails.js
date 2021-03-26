import { MOVIE_DETAILS } from '../actions'

const movieDetails = (state = [], action) => {
  switch (action.type) {
    case MOVIE_DETAILS:
      return action.movieDetails
    default:
      return state
  }
}

export default movieDetails