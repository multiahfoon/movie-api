import React, { useState } from 'react'

const Header = () => {
  const [userInput, setUserInput] = useState('')
  const [search, setSearch] = useState([])
  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  
  const handleClick = () => {
    setSearch(userInput)
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
