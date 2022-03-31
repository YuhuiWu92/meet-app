import React, { Component } from "react";

export default class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
  };
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    // review toUpperCase
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          placeholder="search events in your city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        ></input>
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li
            onClick={() => {
              this.handleItemClicked("all");
            }}
          >
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}