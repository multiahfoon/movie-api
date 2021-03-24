import React, { useState } from 'react'

// function makes get request to api with search
import { getSearchMovie } from '../../api/theMovieDb'
const Header = () => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  const handleClick = () => {
    getSearchMovie(search)
  }

  return (
    <>
      <header>
        <h1>Hello World</h1>
        <nav>
          <input type="text" onChange={handleChange}/>
          <button onClick={handleClick}>Search</button>
        </nav>
      </header>
    </>
  )
}

export default Header
