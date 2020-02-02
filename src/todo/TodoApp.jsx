import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticationRoute from "./AuthenticationRoute";
import Header from "./Header";
import Login from "./LoginComponent";
import Logout from "./Logout";
import Welcome from "./Welcome";
import ListTodos from "./listTodo";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";
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
              <AuthenticationRoute path="/logout" exact component={Logout} />
              <AuthenticationRoute
                path="/welcome/:username"
                exact
                component={Welcome}
              />
              <AuthenticationRoute
                path="/list-todo"
                exact
                component={ListTodos}
              />
              <AuthenticationRoute component={ErrorPage} />
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}
export default TodoApp;
