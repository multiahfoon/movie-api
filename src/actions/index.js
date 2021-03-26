export const POPULAR_MOVIES = 'POPULAR_MOVIES'
export const SEARCH_MOVIE = 'SEARCH_MOVIE'
export const MOVIE_DETAILS = 'MOVIE_DETAILS'

export const popularMovies = (popularMovies) => {
  return  {
    type: POPULAR_MOVIES,
    popularMovies
  }
} 

export const searchMovie = (searchMovie) => {
  return {
    type: SEARCH_MOVIE,
    searchMovie
  }
}

export const movieDetails = (movieDetails) => {
  return {
    type: MOVIE_DETAILS,
    movieDetails
  }
}