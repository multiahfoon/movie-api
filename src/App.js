// react setup
import React from 'react'
import { Route } from 'react-router-dom'

// components
import './App.css'
import Header from './pages/Shared/Header'
import MovieGrid from './pages/Home/MovieGrid'
import MovieDetails from './pages/Movie/MovieDetails'


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
