
// import React, { useEffect, useState } from 'react'

// const Post = () => {
//     const [data, setData] = useState([])

//     async function getData() {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const result = await res.json()
//         setData(result)
//     }

//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <div>
//             <h1>Post</h1>

//             {data.map((post) => (
//                 <div key={post.id}>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Post



// import { useEffect, useState } from 'react';
// import PostCard from './components/PostCard';

// function Posts() {
//   const [posts, setPosts] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//       })
//       .catch(() => {
//         setError('Unable to load posts. Please try again.');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const filteredPosts = posts.filter((post) =>
//     post.title.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) {
//     return <p>Loading posts...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <main className="container">
//       <h1>Explore Posts</h1>
//       <p>Find a story that interests you.</p>

//       <input
//         type="text"
//         placeholder="Search posts by title..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-input"
//       />

//       <div className="posts-grid">
//         {filteredPosts.length > 0 ? (
//           filteredPosts.map((post) => (
//             <PostCard key={post.id} post={post} />
//           ))
//         ) : (
//           <p>No posts found.</p>
//         )}
//       </div>
//     </main>
//   );
// }

// export default Posts;



import { useEffect, useState } from 'react';
import PostCard from '../Components/PostCard';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Explore Posts</h1>
      <p>Find a story that interests you.</p>

      <input
        type="text"
        placeholder="Search posts by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default Posts;
