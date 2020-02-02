import React, { Component } from "react";
import { Link } from "react-router-dom";

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
export default Welcome;
