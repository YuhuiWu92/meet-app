import React, { Component } from "react";
//import { mockData } from "../mock-data";

export default class Event extends Component {
  state = {
    event: {},
    collapsed: true,
  };
  handleDetail = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const event = this.props.event;
    const collapsed = this.state.collapsed;

    return (
      <div>
        <div className="eventCard">
          <h4 className="summary">{this.props.summary}</h4>
          <p className="location">{this.props.location}</p>
          <button className="show-details" onClick={() => this.handleDetail()}>
            show details
          </button>
          <br></br>
          <button className="hide-details" onClick={() => this.handleDetail()}>
            hide details
          </button>
        </div>

        {!collapsed && (
          <div
            className={`extra-details ${
              this.state.collapsed ? "hide" : "show"
            }`}
          >
            <h3>About the event:</h3>
            {/* <a href={event.htmlLink} rel="noreferrer" target="_blank">
              more details on Google Calendar
            </a>
            <p className="event-description">{event.description}</p> */}
          </div>
        )}
      </div>
    );
  }
}
