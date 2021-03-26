import React from 'react'
import { Link } from 'react-router-dom'

const baseImgUrl = 'https://image.tmdb.org/t/p/w500/'

// TODO: add backup for when there is no poster image
const MovieCard = ({ data }) => {
  return (
    <>
      <div className="movieCard">
        <Link to={`/movie/${data.id}`}>
          <img className="poster" src={baseImgUrl + data.poster_path} alt="" />
        </Link>
      </div>
    </>
  )
}

export default MovieCard
