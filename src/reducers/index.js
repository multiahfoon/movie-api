import { MOVIES } from '../actions'

const movies = (state = [], actions) => {
  switch (actions.type) {
    case MOVIES:
      return actions.movies
    default: 
      return state
  }
}

export default movies