import React, { useEffect } from 'react'
import MovieCard from './MovieCard'


// used to connect to redux store
import { connect } from 'react-redux'
// a function that dispatches api response to be reduced
import { getPopularMovies } from './MovieGridHelper'

// react component
const MovieGrid = ({popularMovies}) => {
  useEffect(() => {
    getPopularMovies()
  }, [])
  
  
  return (
    <>
      <main className="movieGrid">
        {
          popularMovies.map(movie => {
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
    popularMovies: state.popularMovies
  }
}

export default connect(mapStateToProp)(MovieGrid)

