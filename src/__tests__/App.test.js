import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../api";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  //Add one more test case to ensure that the NumberOfEvents component is rendered.
  test("render the NumberOfEvents component", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {
  /* making sure that EventList gets events as a prop from App */
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventState = AppWrapper.state("events");
    expect(AppEventState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventState);
    AppWrapper.unmount();
  });

  /* making sure that NumberOfEvents gets numberOfEvents as a prop from App */
  test('App passes "numberOfEvents" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppNumberState = AppWrapper.state("numberOfEvents");
    expect(AppNumberState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(32);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });
  /* 
  test("get list of events matching the city selected by the user", async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    //const locations = extractLocations(mockData);
    NumberOfEventsWrapper.setState({ numberOfEvents:  });
    const numObject = NumberOfEventsWrapper.state("numObject");
    // in this way you can get a index from range (0 to length-1)
    const numberIndex = Math.floor(Math.random() * numObject.length);
    const selectedNumberOfEvents = numObject[numberIndex];
    await NumberOfEventsWrapper.instance().handelInputNum(selectedNumberOfEvents);
    const allEvents = await getEvents();
    const eventsToList = allEvents.filter(
      (event) => event.length === selectedNumberOfEvents
    );
    expect(AppWrapper.state("numberOfEvents")).toEqual(eventsToList);
    AppWrapper.unmount();
  }); */

  test("get list of events matching the city selected by the user", async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    // in this way you can get a index from range (0 to length-1)
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state("events")).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).toEqual(allEvents);
    AppWrapper.unmount();
  });

  /*  test('get 32 events by default', () => {
    //测试appwapper上的events数量是否等于num
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    // in this way you can get a index from range (0 to length-1)
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state("events")).toEqual(eventsToShow);
    AppWrapper.unmount();
  }) */

  /*  test('get the number of events, as the users set', () => {

   }) */
});
