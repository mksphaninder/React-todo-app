import React, { Component } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    // Bind
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="counter">
        <div className="controlButtons">
          <div className="incrementButtons">
            <CounterButton by={1} incrementMethod={this.increment} />
            <CounterButton by={5} incrementMethod={this.increment} />
            <CounterButton by={10} incrementMethod={this.increment} />
          </div>
          <div className="decrementButtons">
            <CounterButton by={-1} incrementMethod={this.increment} />
            <CounterButton by={-5} incrementMethod={this.increment} />
            <CounterButton by={-10} incrementMethod={this.increment} />
          </div>
        </div>
        <div className="count">{this.state.counter}</div>

        <button className="resetButton" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
  increment(by) {
    this.setState({
      counter: this.state.counter + by
    });
  }
  reset = prevState => {
    this.setState({
      counter: 0
    });
  };
}

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
  }
  render() {
    return (
      <div className="counterButton">
        <button onClick={this.increment}>{this.props.by}</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.by
    });

    this.props.incrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {
  by: 1
};

CounterButton.propTypes = {
  by: PropTypes.number
};

export default Counter;
