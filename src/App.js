import React from 'react'

import './App.css'
import Header from './pages/Shared/Header'
import Footer from './pages/Shared/Footer'
import MovieGrid from './pages/Home/MovieGrid'



function App() {
  return (
    <div className="container">
      <Header />
      <MovieGrid/>
      <Footer />
    </div>
  )
}


export default App
