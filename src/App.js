import React from 'react'
import { Route } from 'react-router-dom'

import Header from './pages/Shared/Header'
import MovieGrid from './pages/Home/MovieGrid'
import MovieDetails from './pages/Movie/MovieDetails'

import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Route exact path='/' component={MovieGrid}/>
      <Route exact path='/movie/:id' component={MovieDetails}/>
    </div>
  )
}

export default App
