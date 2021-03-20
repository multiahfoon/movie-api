import React from 'react'
import MovieCard from './MovieCard'

const MovieGrid = ({data}) => {
  return (
    <>
    <main className="movieGrid">
      {
        data.map(movie => {
          return <MovieCard key={movie.id} data={movie}/>
        })
      }
    </main>
    </>
  )
}

export default MovieGrid
