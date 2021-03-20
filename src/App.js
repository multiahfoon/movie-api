import axios from 'axios'
import React, { useEffect } from 'react'

import './App.css'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'

function App() {
  // TODO: needs refactoring, code smells
  useEffect(() => {
    // this can be added in a consume folder
    const fetchMovie = async () => {
      const result = await axios(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.react_app_apikey}`)
      console.log(result.data)
    }
    fetchMovie()
  }, [])


  return (
    <div className="container">
      <Header />
      <Footer />
    </div>
  )
}

export default App;
