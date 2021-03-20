import React from 'react'

const MovieCard = ({data}) => {
  return (
    <>
      <div className="movieCard">
        <p>{data.title}</p>
      </div>
    </>
  )
}

export default MovieCard
