import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
  });
  test("render input number", () => {
    expect(NumberOfEventsWrapper.find(".inputNumberOfEvents")).toHaveLength(1);
  });

  test("renders number input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(
      NumberOfEventsWrapper.find(".inputNumberOfEvents").prop("value")
    ).toBe(numberOfEvents);
  });

  /* test("by default the number is 32", () => {
    NumberOfEventsWrapper.setState({
        num:'32'
    })
    expect(NumberOfEventsWrapper.find(Event)).toHaveLength(32);
  }); */

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32,
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(32);
  });
});
