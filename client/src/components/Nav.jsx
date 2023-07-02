import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/resorts'>Resorts</Link>
      <Link to='/myfavorites'>My Favorites</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Nav