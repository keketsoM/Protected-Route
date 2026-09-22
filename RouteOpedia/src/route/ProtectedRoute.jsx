import { Navigate } from "react-router-dom";
import { getAuthState } from "../Utility/authUtility";
function ProtectedRoute(props) {
  const { isAuthenticated } = getAuthState();
  if (!isAuthenticated) {
    return <Navigate to="/login"></Navigate>;
  }
  return props.children;
}

export default ProtectedRoute;
