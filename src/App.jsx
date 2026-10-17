
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Posts from './Pages/Post';
import PostDetails from './Pages/PostDetails';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
