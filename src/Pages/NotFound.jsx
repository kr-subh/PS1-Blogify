import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="not-found-container">
      <div className="not-found-box">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    </main>
  );
}

export default NotFound;
