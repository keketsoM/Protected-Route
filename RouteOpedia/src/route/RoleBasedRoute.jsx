import { Navigate } from "react-router-dom";
import { getAuthState, hasAnyRole } from "../Utility/authUtility";
function RoleBasedRoute(props) {
  const { isAuthenticated, currentUser } = getAuthState();
  if (!isAuthenticated) {
    return <Navigate to="/login"></Navigate>;
  }
  if (!hasAnyRole(props.allowedRoles)) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Access Denied</h1>
        <p>You don't have permisson to access this page</p>
        <p>
          Your role:<strong>{currentUser?.Role}</strong>
        </p>
        <p>
          Required Roles: <strong>{props.allowedRoles.join(", ")}</strong>
        </p>
        <button
          onClick={() => window.history.back()}
          className="btn btn-secondary"
        >
          Go back
        </button>
      </div>
    );
  }
  return props.children;
}

export default RoleBasedRoute;
