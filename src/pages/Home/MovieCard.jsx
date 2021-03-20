import React from 'react'

// TODO: Need to move this else where, maybe into consume file
// Need a better way of handling consume
const baseUrl = 'https://image.tmdb.org/t/p/w500/'


const MovieCard = ({data}) => {
  return (
    <>
      <div className="movieCard">
        <img className="poster" src={baseUrl + data.poster_path} alt=""/>
      </div>
    </>
  )
}

export default MovieCard
