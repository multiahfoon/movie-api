import React, { useEffect } from 'react'

// used to connect to redux store
import { connect } from 'react-redux'

// fires request to api to get movie and dispatches action
import { getMovieDetails } from '../../api/theMovieDb'

const MovieDetails = ({movie}) => {
  const Id = '399566'
  
  useEffect(() => {
    getMovieDetails(Id)
  }, [])

  // TODO: this works for now but needs refactoring  
  return movie.length < 1 ?
   null 
   : (
    <>
      <h1>Movie Details</h1>
      
      <h2>{movie.belongs_to_collection.name}</h2>
    </>
  )
}

function mapStateToProp (state) {
  return {
    movie: state.movieDetails
  }
}

export default connect(mapStateToProp)(MovieDetails)
