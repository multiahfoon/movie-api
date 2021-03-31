import React, { useEffect } from 'react'

// used to connect to redux store
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import { dispatch } from '../../store'
import { searchMovie, popularMovies } from '../../actions'


// fires request to api to get movie and dispatches action
import { getMovieDetails } from '../../api/theMovieDb'

// this is different to landing page poster
// a larger image is needed for this page
const basePosterUrl = 'https://image.tmdb.org/t/p/w500/'

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
        <section className='movieDetails'>
          
          <div className="detailsPoster">
            {
              movie.poster_path !== null
                ? <img className="poster" src={basePosterUrl + movie.poster_path} alt="" />
                : <img className="poster" src={'/noPoster.png'} alt="no poster" />
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
