import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>Blogify</h1>
        <Link to='/'>Home</Link>
        <Link to = '/posts'>Read Post</Link>
        

      
    </div>
  )
}

export default Navbar
