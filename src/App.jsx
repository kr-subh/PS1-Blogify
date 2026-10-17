
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Post from './Pages/Post';
import PostDetails from './Pages/PostDetails';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post/>} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
