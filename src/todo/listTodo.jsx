import React, { Component } from "react";
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
export default ListTodos;
