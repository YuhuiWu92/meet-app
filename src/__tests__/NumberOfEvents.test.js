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
    expect(NumberOfEventsWrapper.find(".inputNumber")).toHaveLength(1);
  });

  test("renders number input correctly", () => {
    const num = NumberOfEventsWrapper.state("num");
    expect(NumberOfEventsWrapper.find(".inputNumber").prop("value")).toBe(num);
  });

  /* test("by default the number is 32", () => {
    NumberOfEventsWrapper.setState({
        num:'32'
    })
    expect(NumberOfEventsWrapper.find(Event)).toHaveLength(32);
  }); */

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      num: 32,
    });
    expect(NumberOfEventsWrapper.state("num")).toEqual(32);
  });
});
