import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>
        # Welcome to Blogify! 📚
      </h1>

      <p>
        Your next great read starts here. Explore stories, discover fresh perspectives, <br />
        and dive into blogs on topics you love. Whether you're here to learn something new,<br />
        stay informed, or simply enjoy a good read, Blogify brings your favorite content <br />
        together in one place.
      </p>


        <h2>
            **Read. Explore. Discover. Repeat.**
        </h2>

        {/* <button>Read Post 📰</button> */}
        <Link to='/post'>Post</Link>
    </div>
  )
}

export default Home
