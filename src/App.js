import axios from 'axios'
import React, { useState, useEffect } from 'react'

import './App.css'
import Header from './pages/Shared/Header'
import Footer from './pages/Shared/Footer'
import MovieGrid from './pages/Home/MovieGrid'
function App() {
  
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.react_app_apikey}`)
      .then(popularMovies => {
        setMovies(popularMovies.data.results)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container">
      <Header />
      <MovieGrid data={movies}/>
      <Footer />
    </div>
  )
}

export default App;
