import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-card">
        <h1>Welcome to Blogify 📚</h1>
        <p>
          Your next great read starts here. Explore stories, discover fresh perspectives,
          and dive into blogs on topics you love. Whether you're here to learn something new,
          stay informed, or simply enjoy a good read, Blogify brings your favorite content
          together in one place.
        </p>
        <p className="hero-tagline">Read. Explore. Discover. Repeat.</p>
        <Link to="/post" className="btn-primary">Explore Posts 📰</Link>
      </div>
    </div>
  );
};

export default Home;
