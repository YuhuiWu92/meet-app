import React, { Component } from "react";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { OfflineAlert } from "./Alert";

import "./nprogress.css";
import "./App.css";
class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "",
    OfflineAlertText: "",
  };
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events),
        });
      }
      if (!navigator.onLine) {
        this.setState({
          OfflineAlertText: "no internet connection",
        });
      } else {
        this.setState({
          OfflineAlertText: "",
        });
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  updateNumberOfEvents = (numberOfEvents) => {
    //console.log(this.state.currentLocation, numberOfEvents);
    this.setState({
      numberOfEvents,
    });
    this.updateEvents(this.state.currentLocation, numberOfEvents);
  };
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents}
        />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
        <OfflineAlert text={this.OfflineAlertText} />
      </div>
    );
  }
}

export default App;
