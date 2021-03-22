import React, { useEffect } from 'react'
import MovieCard from './MovieCard'


// used to connect to redux store
import { connect } from 'react-redux'
// a function that dispatches api response to be reduced
import { getMovies } from './MovieGridHelper'

// react component
const MovieGrid = ({ movies }) => {
  useEffect(() => {
    getMovies()
  }, [])
  
  
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
    movies: state.movies
  }
}

export default connect(mapStateToProp)(MovieGrid)

