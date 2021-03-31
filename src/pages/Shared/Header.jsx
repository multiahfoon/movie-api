import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { dispatch } from '../../store'
import { searchMovie, movieDetails } from '../../actions' 

// function makes get request to api with search
import { getSearchMovie, getPopularMovies } from '../../api/theMovieDb'

const Header = (props) => {
  const [search, setSearch] = useState('')
  const handleChange = (e) => setSearch(e.target.value)
  
  const history = useHistory()

  const clear = []
  const handleSubmit = (e) => {
    e.preventDefault()
    return search !== "" ? (
      history.push('/'),
      getSearchMovie(search)
    ) : null
  }

const resetMovies = () => {
  dispatch(searchMovie(clear))
  dispatch(movieDetails(clear))
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
