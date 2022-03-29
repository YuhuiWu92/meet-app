import React, { Component } from "react";

export default class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32, //numbers of events to be rendered
  };
  handelInputNum = (event) => {
    const value = event.target.value; //your input number
    if (value < 1 || value > 100) {
      this.setState({
        numberOfEvents: "",
        errorText: "Please enter a number between 1 and 100",
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };
  render() {
    return (
      <div className="NumberOfEvents">
        <h5> Number of Events:</h5>
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
