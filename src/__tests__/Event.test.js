import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event/> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });
  test("renders event name correctly", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("renders event location correctly", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("renders detail button correctly", () => {
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });

  test("details collapsed by default", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("renders detail by button click", () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("hide detail if click details button again", () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
