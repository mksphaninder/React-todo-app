import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class TodoApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" exact component={Login} />
              <Route path="/welcome/:username" exact component={Welcome} />
              <Route path="/list-todo" exact component={ListTodos} />
              <Route component={ErrorPage} />
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

class ErrorPage extends Component {
  render() {
    return <div>An error has occured please contact support!!!</div>;
  }
}

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my web app {this.props.match.params.username}</h1>
        <br />
        <p>
          Click <Link to="/list-todo">here</Link> to got to the list of todos
          page
        </p>
      </div>
    );
  }
}

class Header extends Component {
  render() {
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
              <li className="nav-item active">
                <Link className="nav-link" to="/welcome/krishna">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="list-todo">
                  Your Todos
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end">
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <span className="text-muted">My APP Still under construction</span>
        </footer>
      </>
    );
  }
}

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn react",
          targetDate: new Date(),
          isDone: false
        },
        {
          id: 2,
          description: "Learn Something New",
          targetDate: new Date(),
          isDone: false
        },
        {
          id: 3,
          description: "Learn to Dance",
          targetDate: new Date(),
          isDone: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Description</th>
                  <th scope="col">Target Date</th>
                  <th scope="col">Is done?</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map(todo => (
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.targetDate.toString()}</td>
                    <td>{todo.isDone.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "krishna",
      password: "",
      loginSuccess: false,
      loginFail: false
    };

    // Binding
    this.handleChange = this.handleChange.bind(this);
    this.loginButton = this.loginButton.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  loginButton() {
    if (
      this.state.username === "krishna" &&
      this.state.password === "password"
    ) {
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({
        loginSuccess: true,
        loginFail: false
      });
    } else {
      this.setState({
        loginSuccess: false,
        loginFail: true
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="loginForm">
            <h1>Login</h1>
            <div className="form-group">
              <label for="username">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-secondary" onClick={this.loginButton}>
              {" "}
              Login{" "}
            </button>
            <br />
            {this.state.loginFail && (
              <div className="text-danger">Invalid Credentials</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
