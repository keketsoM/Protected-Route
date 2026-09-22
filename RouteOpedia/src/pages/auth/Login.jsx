import { useNavigate } from "react-router-dom";
import { setAuthState } from "../../Utility/authUtility";
function Login() {
  const navigate = useNavigate();
  const handleFakeLogin = (role) => {
    const users = {
      admin: { email: "admin@demo.com", name: "Admin User", role: "admin" },
      customer: {
        email: "customer@demo.com",
        name: "Customer User",
        role: "customer",
      },
    };
    setAuthState(true, users[role]);
    navigate("/");
  };
  return (
    <div>
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 border rounded p-4 shadow-sm">
            <div className="text-center py-5">
              <h1 className="mb-4">
                <i className="bi bi-shield-lock-fill me-2"></i>
                Login
              </h1>
              <p className="text-muted mb-4">
                Choose your role for demo purposes:
              </p>

              <div className="d-grid gap-3 mb-4">
                <button
                  onClick={() => handleFakeLogin("admin")}
                  className="btn btn-danger btn-lg"
                >
                  <i className="bi bi-person-gear me-2"></i>
                  Login as Admin
                </button>
                <button
                  onClick={() => handleFakeLogin("customer")}
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-person-circle me-2"></i>
                  Login as Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
