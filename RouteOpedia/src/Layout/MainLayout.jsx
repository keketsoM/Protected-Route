import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/react.svg";
import { getAuthState, logout } from "../Utility/authUtility";
function MainLayout() {
  const navigate = useNavigate();
  const { isAuthenticated } = getAuthState();

  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} height="30" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productsList">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customerPortal">
                Customer Portal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminPortal">
                Admin Portal
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            {isAuthenticated ? (
              <button
                onClick={() => handleLogout()}
                className="btn btn-outline-danger"
              >
                Logout
              </button>
            ) : (
              <NavLink className="btn btn-primary" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainLayout;
