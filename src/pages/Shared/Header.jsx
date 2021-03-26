import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// function makes get request to api with search
import { getSearchMovie, getPopularMovies } from '../../api/theMovieDb'

const Header = (props) => {
  const history = useHistory()
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // if search is an empty string do not make api call
    await search !== "" ? getSearchMovie(search) : null
      .then(() => history.push('/'))
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
