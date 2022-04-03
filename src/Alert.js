import React, { Component } from "react";

export default class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }
  getStyle = () => {
    return {
      backgroundColor: this.backgroundColor,
      fontSize: "16px",
      fontWeight: "700",
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.backgroundColor = "blue";
  }
}

export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.backgroundColor = "red";
  }
}

export class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.backgroundColor = "pink";
  }
}
