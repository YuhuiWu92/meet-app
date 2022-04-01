import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

export default class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    ErrorText: "",
  };
  handelInputNum = (event) => {
    const value = event.target.value; //your input number
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: "",
        ErrorText: "Please enter a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        ErrorText: "",
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };
  render() {
    return (
      <div className="NumberOfEvents">
        <h5> Number of Events:</h5>
        <span>
          <ErrorAlert text={this.state.ErrorText} />
        </span>
        <input
          type="number"
          className="inputNumberOfEvents"
          value={this.state.numberOfEvents}
          onChange={this.handelInputNum}
        />
      </div>
    );
  }
}
