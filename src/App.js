import React, { Component } from "react";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import { OfflineAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";
import EventGenre from "./EventGenre";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./nprogress.css";
import "./App.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "",
    OfflineAlertText: "",
    showWelcomeScreen: undefined,
  };
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({
      showWelcomeScreen: !(code || isTokenValid),
    });
    if ((code || isTokenValid) && this.mounted) {
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
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };
  render() {
    const { locations, numberOfEvents, events } = this.state;
    if (
      this.state.showWelcomeScreen === undefined &&
      navigator.onLine &&
      !window.location.href.startsWith("http://localhost")
    ) {
      return <div className="App" />;
    }
    if (this.state.showWelcomeScreen === true)
      return (
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      );
    return (
      <div className="App">
        <OfflineAlert text={this.OfflineAlertText} />
        <div className="title-wrapper">
          <h1>Meet App</h1>
          <h3>Connect and learn with developers worldwide.</h3>
        </div>
        <div className="input-wrapper">
          <h5>Choose your nearest city</h5>
          <CitySearch locations={locations} updateEvents={this.updateEvents} />

          <NumberOfEvents
            numberOfEvents={numberOfEvents}
            updateNumberOfEvents={this.updateEvents}
          />
        </div>
        <div className="data-wrapper">
          <h4>Events in each city</h4>
          <div className="data-vis-wrapper">
            <EventGenre className="pie-chart" events={events} />
            <ResponsiveContainer height={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis
                  strokeWidth={1.5}
                  stroke="#F8DB5C"
                  type="category"
                  dataKey="city"
                  name="city"
                />
                <YAxis
                  strokeWidth={1.5}
                  stroke="#F8DB5C"
                  type="number"
                  dataKey="number"
                  name="number of events"
                  allowDecimals={false}
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.getData()} fill="#A3C4BC" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="events-wrapper">
          <EventList events={events} numberOfEvents={numberOfEvents} />
        </div>
      </div>
    );
  }
}

export default App;
