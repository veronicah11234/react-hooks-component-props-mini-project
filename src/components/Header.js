import React from 'react'

function Header({blogName}) {
  return (
    <header>
        <h1>OVERREACTED</h1>
        <h2>{blogName}</h2>
    </header>
  )
}

export default Header