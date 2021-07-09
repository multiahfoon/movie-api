import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

import { connect } from 'react-redux'
import { dispatch } from '../../store'
import { searchMovie, movieDetails } from '../../actions'


import './MovieDetails.styles.css'
import { getMovieDetails, getPopularMovies } from '../../api/theMovieDb'
const basePosterUrl = 'https://image.tmdb.org/t/p/w500'

const MovieDetails = (props) => {
  const { id } = useParams()
  const { movie } = props
  const history = useHistory()
  const clear = []

  useEffect(() => {
    getMovieDetails(id)
  }, [id])

  const handleClick = () => {
    dispatch(searchMovie(clear))
    dispatch(movieDetails(clear))
    getPopularMovies()
    history.push('/')
  }

  // stops markup from rendering until state in store has completely loaded 
  return movie.length < 1 ?
    null
    : (
      <>
        <section className='movieDetails' >
          <div className="detailsPoster">
            {
              movie.poster_path !== null
                ? <img src={basePosterUrl + movie.poster_path} />
                : <img src={'/noPoster.png'} alt="no poster" />
            }
          </div>

          <article className='movieBio'>
            <div>
              <h1>{movie.title}</h1>
              <section>
                <div>
                  <ul className='movieDetailGenres'>
                    <li><p>{movie.release_date}</p></li>
                    <li><p>Genres: </p></li>
                    {
                      movie.genres.map(genre => {
                        return (<li key={genre.id}><p>{genre.name}</p></li>)
                      })
                    }
                  </ul>
                </div>
              </section>
              <p>{movie.overview}</p>
              <p>{movie.tagline}</p>
              <p>Runtime: {movie.runtime}min</p>
              <p>Rating: {movie.vote_average}</p>
              <button onClick={handleClick}>Back</button>
            </div>
          </article>
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
