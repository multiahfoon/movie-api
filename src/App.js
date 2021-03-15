import axios from 'axios';
import React, { useEffect } from 'react'

import './App.css';
import Header from './components/ui/Header'
function App() {
  // TODO: needs refactoring, code smells
  useEffect(() => {
    const fetchMovie = async () => {
      const result = await axios (`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.react_app_apikey}`)
      console.log(result.data)
    }
    fetchMovie()
  }, [])


  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
