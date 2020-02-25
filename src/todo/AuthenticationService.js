class AuthenticationService {
  loginSession(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
  }

  logoutSession() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isLoggedin() {
    let authenticated = sessionStorage.getItem("authenticatedUser");
    if (authenticated != null) {
      return true;
    } else {
      return false;
    }
  }
  getLoggedInUserName() {
    return sessionStorage.getItem("authenticatedUser");
  }
}

export default new AuthenticationService();
