import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent, {
  ThirdComponent,
  FourthComponent
} from "./components/learning-examples/SecondComponent";
import Counter from "./components/counter/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
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
