import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Post_id from './Pages/Post_id'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Post/>}/>
        <Route path='/posts/:id' element={<Post_id/>}/>
        <Route/>
      </Routes>
      
    </div>
  )
}

export default App
