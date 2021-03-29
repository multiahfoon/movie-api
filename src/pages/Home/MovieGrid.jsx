import React, { useEffect } from 'react'

// used to connect to redux store
import { connect } from 'react-redux'

// fires request to api to get movie and dispatches action
import { getPopularMovies } from '../../api/theMovieDb'

// child component
import MovieCard from './MovieCard'

const MovieGrid = (props) => {
  const {
    popularMovies,
    searchMovie
  } = props

  useEffect(() => {
    getPopularMovies()
  }, [])

  // TODO: needs refactoring
  // if theres nothing in search movie show popular movies else show searched movie results
  let movies = []
  searchMovie.length < 1
    ? movies = [...movies, ...popularMovies]
    : movies = [...movies, ...searchMovie]

  return (
    <>
      <main className="movieGrid">
        {
          movies.map(movie => {
            return <MovieCard key={movie.id} data={movie} />
          })
        }
      </main>
    </>
  )
}

// add store to components props
function mapStateToProp(state) {
  return {
    popularMovies: state.popularMovies,
    searchMovie: state.searchMovie
  }
}

export default connect(mapStateToProp)(MovieGrid)

