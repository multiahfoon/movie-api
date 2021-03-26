import React, { useEffect } from 'react'

// used to connect to redux store
import { connect } from 'react-redux'
import { useParams } from 'react-router'

// fires request to api to get movie and dispatches action
import { getMovieDetails } from '../../api/theMovieDb'

const MovieDetails = (props) => {
  // const Id = '399566'
  const { id }  = useParams()
  const { movie } = props

  useEffect(() => {
    getMovieDetails(id)
  }, [id])

  // TODO: this works for now but needs refactoring  
  return movie.length < 1 ?
   null 
   : (
    <>
      <h1>Movie Details</h1>
      
      <h2>{movie.title}</h2>
    </>
  )
}

function mapStateToProp (state) {
  return {
    movie: state.movieDetails
  }
}

export default connect(mapStateToProp)(MovieDetails)
