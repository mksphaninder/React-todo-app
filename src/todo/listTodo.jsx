import React, { Component } from "react";
import TodoService from './TodoService.js';
import AuthenticationService from "./AuthenticationService.js";
class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [],
      message : null
    };

    //Implicit binding methods
    this.showTodos = this.showTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
        {this.state.message && <div className="toastMessage alert-success text-center">{this.state.message}</div>}
          <div className="col-md-12">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Description</th>
                  <th scope="col">Target Date</th>
                  <th scope="col">Is done?</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map(todo => (
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.targetDate.toString()}</td>
                    <td>{todo.done.toString()}</td>
                    <td><button className="btn btn-secondary" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName();
    this.showTodos();
  }

  showTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    //updating state
    TodoService.getTodos(username)
    .then((response) => {
      this.setState( {
        todos : response.data
      })
    })
  }

  deleteTodo(id) {
    let username = AuthenticationService.getLoggedInUserName();
    //Sending request
    TodoService.deleteTodo(username,id)
      .then((response) => {
        this.setState({
          message : `The todo with id ${id} has been removed.`
        })
        this.showTodos();
      })
  }
}
export default ListTodos;
