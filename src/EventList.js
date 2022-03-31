import React, { Component } from "react";
import { Col } from "react-bootstrap";
import Event from "./Event"; // in src/EventList.js

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map((event) => (
          <Col xs={12} md={10} key={event.id} className="eventcard">
            <Event event={event} />
          </Col>
        ))}
      </ul>
    );
  }
}
