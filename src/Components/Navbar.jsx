
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Blogify </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/post">Read Posts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
