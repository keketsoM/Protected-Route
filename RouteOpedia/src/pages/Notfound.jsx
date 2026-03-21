import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 text-danger">
        <i className="bi bi-x-octagon-fill me-2"></i>404
      </h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <div className="mt-4">
        <Link to="/" className="btn btn-primary me-2">
          <i className="bi bi-house-door"></i> Go Home
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
