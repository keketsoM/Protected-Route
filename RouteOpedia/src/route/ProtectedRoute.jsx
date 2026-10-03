import { Navigate,useLocation } from "react-router-dom";
import { getAuthState } from "../Utility/authUtility";
function ProtectedRoute(props) {
  const location =useLocation();
  const { isAuthenticated } = getAuthState();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{from:location}}></Navigate>;
  }
  return props.children;
}

export default ProtectedRoute;
