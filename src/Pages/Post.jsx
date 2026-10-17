import React from 'react'

const Post = () => {

    async function getData(){

        const[data, setData]=useState([])

      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      console.log(res);
      setData(res.data);


    }

  return (
    <div>
        <h1>POst</h1>
    </div>
  )
}

export default Post
