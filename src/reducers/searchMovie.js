import { SEARCH_MOVIE } from '../actions'

const searchMovie = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return action.searchMovie
    default:
      return state
  }
}

export default searchMovie