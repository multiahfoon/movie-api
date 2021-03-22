import axios from 'axios'
import React, {useEffect } from 'react'
import MovieCard from './MovieCard'

// redux
import { connect } from 'react-redux'
import {setMovies} from '../../actions'
import { dispatch } from '../../store'

const MovieGrid = ({movies}) => {
  
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.react_app_apikey}`)
      .then(popularMovies => {
        dispatch(setMovies(popularMovies.data.results))
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
    <main className="movieGrid">
      {
        movies 
        ? movies.map(movie => {
          return <MovieCard key={movie.id} data={movie}/>
        })
        : "Loading..."
      }
    </main>
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProp)(MovieGrid)

