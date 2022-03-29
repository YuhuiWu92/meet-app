import React, { Component } from "react";

export default class NumberOfEvents extends Component {
  state = {
    num: 32,
    numObject: 32,
  };
  handelInputNum = (event) => {
    const numObject = event.target.value;
    this.setState({ num: numObject });
  };
  render() {
    return (
      <div className="NumberOfEvents">
        <h5> Number of Events:</h5>
        <input
          type="number"
          className="inputNumber"
          value={this.state.num}
          onChange={this.handelInputNum}
        />
      </div>
    );
  }
}
