import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent, {
  ThirdComponent,
  FourthComponent
} from "./components/learning-examples/SecondComponent";
import Counter from "./components/counter/Counter";
import TodoApp from "./todo/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}

function LearningComponents() {
  return (
    <div className="learningComponents">
      Hello
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </div>
  );
}

export default App;
