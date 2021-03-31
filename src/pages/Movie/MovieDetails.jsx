import React, { useEffect } from 'react'

// used to connect to redux store
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import { dispatch } from '../../store'
import { searchMovie, popularMovies } from '../../actions'

import { baseImgUrl } from '../Home/MovieCard'

// fires request to api to get movie and dispatches action
import { getMovieDetails } from '../../api/theMovieDb'

const MovieDetails = (props) => {
  // const Id = '399566'
  const { id } = useParams()
  const { movie } = props

  useEffect(() => {
    getMovieDetails(id)
    dispatch(searchMovie([]))
    dispatch(popularMovies([]))
  }, [id])


  // TODO: this works for now but needs refactoring
  // stops markup from rendering until movies has completely loaded 
  return movie.length < 1 ?
    null
    : (
      <>
        <section class='movieDetails'>
          <h1>Movie Details</h1>
          <h2>{movie.title}</h2>
          {
            movie.poster_path !== null
              ? <img className="poster" src={baseImgUrl + movie.poster_path} alt="" />
              : <img className="poster" src={'/noPoster.png'} alt="no poster" />
          }
          <p>{movie.overview}</p>
          {
            movie.genres.map(genre => {
              return (<p>{genre.name}</p>)
            })
          }
          <p>Rating: {movie.vote_average}</p>
          <p>Runtime: {movie.runtime}min</p>
        </section>
      </>
    )
}

function mapStateToProp(state) {
  return {
    movie: state.movieDetails
  }
}

export default connect(mapStateToProp)(MovieDetails)
