import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// used to connect to redux store
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { dispatch } from '../../store'
import './MovieDetails.styles.css'
import { searchMovie, movieDetails } from '../../actions'


// fires request to api to get movie and dispatches action
import { getMovieDetails, getPopularMovies } from '../../api/theMovieDb'


const basePosterUrl = 'https://image.tmdb.org/t/p/w500'

const MovieDetails = (props) => {
  const { id } = useParams()
  const { movie } = props

  useEffect(() => {
    getMovieDetails(id)
  }, [id])

  const history = useHistory()
  const handleClick = () => {
    dispatch(searchMovie([]))
    dispatch(movieDetails([]))
    getPopularMovies()
    history.push('/')
  }

  // stops markup from rendering until movies has completely loaded 
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
