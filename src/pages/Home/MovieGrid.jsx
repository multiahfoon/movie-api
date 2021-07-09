import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getPopularMovies } from '../../api/theMovieDb'

import MovieCard from './MovieCard'

import './MovieGrid.styles.css'

const MovieGrid = (props) => {
  const { popularMovies, searchMovie } = props

  useEffect(() => {
    getPopularMovies()
  }, [])

  // checks if a movie search has been done. If not, set movies to popularMovies
  let movies = []
  searchMovie.length < 1
    ? movies = [...movies, ...popularMovies]
    : movies = [...movies, ...searchMovie]

  return (
    <>
      <main className="movieGrid">
        {
          movies.map(movie => <MovieCard key={movie.id} data={movie} />)
        }
      </main>
    </>
  )
}

function mapStateToProp(state) {
  return {
    popularMovies: state.popularMovies,
    searchMovie: state.searchMovie
  }
}

export default connect(mapStateToProp)(MovieGrid)

