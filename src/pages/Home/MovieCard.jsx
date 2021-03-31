import React from 'react'
import { Link } from 'react-router-dom'

const baseImgUrl = 'https://image.tmdb.org/t/p/w300/'

const MovieCard = ({ data }) => {
  return (
    <>
      <div className="movieCard">
        <Link to={`/movie/${data.id}`}>
          {
            data.poster_path !== null 
              ? <img className="poster" src={baseImgUrl + data.poster_path} alt="" /> 
              : <img className="poster" src={'/noPoster.png'} alt="no poster" />
          }
        </Link>
      </div>
    </>
  )
}

export default MovieCard
