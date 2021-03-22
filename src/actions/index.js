export const MOVIES = 'MOVIES'

const setMovies = (movies) => {
  return  {
    type: MOVIES,
    movies
  }
} 

export default setMovies

