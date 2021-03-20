import axios from 'axios'
import React, { useState, useEffect } from 'react'

import './App.css'
import Header from './pages/Shared/Header'
import Footer from './pages/Shared/Footer'
import MovieGrid from './pages/Home/MovieGrid'
function App() {
  const [movies, setMovies] = useState([])

  // TODO: move axios into an api directory
  // to maintain the state, you will need redux
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.react_app_apikey}`)
      .then(popularMovies => {
        setMovies(popularMovies.data.results)
      })
      .catch(err => console.error(err))
  }, [])

  console.log(movies)

  return (
    <div className="container">
      <Header />
      <MovieGrid />
      <Footer />
    </div>
  )
}

export default App;
