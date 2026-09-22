let isAuthenticated = false;
let currentUser = null;

try {
  const storedAuth = sessionStorage.getItem("demoAuth");
  if (storedAuth) {
    const authData = JSON.parse(storedAuth);
    isAuthenticated = authData.isAuthenticated;
    currentUser = authData.currentUser;
  }
} catch (e) {
  console.log(`No stored auth data ${e}`);
}

function getAuthState() {
  return {isAuthenticated, currentUser};
}

function setAuthState(auth, user = null) {
  isAuthenticated = auth;
  currentUser = user;
  try {
    sessionStorage.setItem(
      "demoAuth",
      JSON.stringify({ isAuthenticated, currentUser }),
    );
  } catch (e) {
    console.log(`Could not store auth data ${e}`);
  }
}

function hasRoles(role) {
  return currentUser?.role == role;
}
function hasAnyRole(roles) {
  return roles.includes(currentUser?.role);
}
function logout() {
  setAuthState(false, null);
  try {
    sessionStorage.removeItem("demoAuth");
  } catch (e) {
    console.log(`Could not clear auth data ${e}`);
  }
}
export { getAuthState, setAuthState,hasAnyRole,hasRoles,logout };
