import React, { Component } from "react";
//import { mockData } from "../mock-data";
import { Button } from "react-bootstrap";

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
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div>
        <div className="event">
          <h4 className="summary">{event.summary}</h4>
          <p className="start-date">
            {event.start.dateTime} ({event.start.timeZone})
          </p>
          <p className="location">
            @{event.summary} | {event.location}
          </p>
          <Button
            variant="outline-success"
            size="sm"
            className="details-btn"
            onClick={() => this.handleDetail()}
          >
            Details
          </Button>
        </div>
        {!collapsed && (
          <div
            className={`box-details ${this.state.collapsed ? "hide" : "show"}`}
          >
            <h6>About the event:</h6>
            <a href={event.htmlLink} rel="noreferrer" target="_blank">
              more details on Google Calendar
            </a>
            <p className="event-description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}
