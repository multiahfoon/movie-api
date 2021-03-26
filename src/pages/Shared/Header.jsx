import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// function makes get request to api with search
import { getSearchMovie, getPopularMovies } from '../../api/theMovieDb'

const Header = (props) => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // if search is an empty string do not make api call
    return search !== "" 
      ? getSearchMovie(search) 
      : null
  }

  const resetMovies = () => {
    getPopularMovies()
  }

  return (
    <>
      <header>
        <Link to='/' onClick={resetMovies}>
          <h1>Hello World</h1>
        </Link>
        <nav>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button>Search</button>
          </form>
        </nav>

      </header>
    </>
  )
}

export default Header
