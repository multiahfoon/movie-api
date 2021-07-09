import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { dispatch } from '../../store'
import { searchMovie, movieDetails } from '../../actions' 

// function makes get request to api with search
import { getSearchMovie, getPopularMovies } from '../../api/theMovieDb'

import './Header.styles.css'

const Header = (props) => {
  const movieDbLogo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg'
  const history = useHistory()
  
  const [search, setSearch] = useState('')
  const handleChange = (e) => setSearch(e.target.value)
  

  const clear = []
  const handleSubmit = (e) => {
    e.preventDefault()
    return search !== "" ? (
      getSearchMovie(search),
      history.push('/'),
      e.target[0].value = ''
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
        <img className='brandName' src={movieDbLogo} alt="Brand logo"/>
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
