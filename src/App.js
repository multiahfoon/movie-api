// react setup
import React from 'react'
import { Route } from 'react-router-dom'

// components
import './App.css'
import Header from './pages/Shared/Header'
import Footer from './pages/Shared/Footer'
import MovieGrid from './pages/Home/MovieGrid'



function App() {
  return (
    <div className="container">
      <Header />
      <Route exact to='/' component={MovieGrid}/>
      <Footer />
    </div>
  )
}


export default App
