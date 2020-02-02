import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Header extends Component {
  render() {
    const auth = AuthenticationService.isLoggedin();
    console.log(auth);
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="#">
            Krishna
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {auth &&
                <li className="nav-item active">
                  <Link className="nav-link" to='/welcome/'>
                    Home
                  </Link>
                </li>
              }
              {auth &&
                <li className="nav-item">
                  <Link className="nav-link" to="list-todo">
                    Your Todos
                  </Link>
                </li>
              }
            </ul>
            <ul className="navbar-nav justify-content-end">
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              {auth &&
                <li>
                  <Link
                    className="nav-link"
                    onClick={AuthenticationService.logoutSession}
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              }
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Header);
