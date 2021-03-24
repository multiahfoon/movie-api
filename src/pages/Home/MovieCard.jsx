import React from 'react'

const baseImgUrl = 'https://image.tmdb.org/t/p/w500/'

// TODO: add backup for when there is no poster image
const MovieCard = ({data}) => {
  return (
    <>
      <div className="movieCard">
        <img className="poster" src={baseImgUrl + data.poster_path} alt=""/>
      </div>
    </>
  )
}

export default MovieCard
