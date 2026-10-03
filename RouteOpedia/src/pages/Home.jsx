import { useNavigate } from "react-router-dom";
import { getAuthState } from "../Utility/authUtility";
const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = getAuthState();
  function handleContactClick() {
    //processing
    navigate("/contact");
  }
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">
        <i className="bi bi-house-door-fill me-2"></i>Home Page
      </h1>
      <div className="border rounded shadow p-4" style={{ textAlign: "left" }}>
        {isAuthenticated ? (
          <p>
            Welcome back, <strong>{currentUser?.name}</strong>
            <span
              className={`badge ms-2 ${currentUser?.role === "admin" ? "bg-danger" : "bg-primary"}`}
            >
              {currentUser?.role}
            </span>
          </p>
        ) : (
          <p>Welcome to the React Router demo!</p>
        )}

        <h4 className="mt-4">
          <i className="bi bi-shield-lock-fill me-2"></i>Try Role-Based Access
        </h4>
        <p>Login as either:</p>
        <ul>
          <li>
            <strong>Admin</strong> <i className="bi bi-person-gear ms-1"></i> -
            Access admin dashboard and user management
          </li>
          <li>
            <strong>Customer</strong>{" "}
            <i className="bi bi-person-badge ms-1"></i> - Access customer portal
            features
          </li>
        </ul>
        <p>Try accessing /admin or /customer-portal with different roles!</p>
        <div className="mb-4">
          <button onClick={handleContactClick} className="btn btn-secondary">
            Go to Contact Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
