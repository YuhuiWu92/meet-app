import React, { Component } from "react";

export default class NumberOfEvents extends Component {
  state = {
    num: "",
  };
  handelInputNum = (event) => {
    const numObject = event.target.value;
    this.setState({ num: numObject });
  };
  render() {
    return (
      <div className="NumberOfEvents">
        <h6>Number of Events:</h6>
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
