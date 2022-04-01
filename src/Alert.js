import React, { Component } from "react";

export default class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }
  getStyle = () => {
    return {
      color: this.color,
      fontSize: "16px",
      fontWeight: "",
    };
  };

  render() {
    return (
      <div className="Alert">
        <strong className="AlertInfo" style={this.getStyle()}>
          {this.props.text}
        </strong>
      </div>
    );
  }
}

export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
}

export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
}

export class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "green";
  }
}
