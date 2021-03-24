import React, { useEffect } from 'react'
import MovieCard from './MovieCard'


// used to connect to redux store
import { connect } from 'react-redux'
// get movies from api and add them to store
import { getPopularMovies } from '../../api/theMovieDb'

// react component
const MovieGrid = (props) => {
  const {
    popularMovies,
    searchMovie
  } = props

  
  
  useEffect(() => {
    getPopularMovies()
  }, [])

  let movies = []
  searchMovie.length < 1 ? movies = [...movies, ...popularMovies] : movies = [...movies, ...searchMovie]

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
function mapStateToProp (state) {
  return {
    popularMovies: state.popularMovies,
    searchMovie: state.searchMovie 
  }
}

export default connect(mapStateToProp)(MovieGrid)

