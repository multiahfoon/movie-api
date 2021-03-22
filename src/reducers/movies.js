import { MOVIES } from '../actions'

const movies = (state = [], action) => {
  switch (action.type) {
    case MOVIES:
      return action.movies
    default: 
      return state
  }
}

export default movies