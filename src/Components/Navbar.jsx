import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">Blogify</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/post">Read Posts</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
