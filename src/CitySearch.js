import { text } from "body-parser";
import React, { Component } from "react";

export default class CitySearch extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <div className="CitySearch">
        <input type={text} className="city" value={this.state.query} />
        <ul className="suggestions"></ul>
      </div>
    );
  }
}
