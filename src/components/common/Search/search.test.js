/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import { SearchItems } from "./Search";

describe("Reset component", () => {
  const component = shallow(<SearchItems />);
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
  it("should call onSubmit method when the button is clicked search", () => {
    const spy = jest.spyOn(component.instance(), "onSubmit");
    component.instance().forceUpdate();
    const Event = { preventDefault: () => {} };
    const form = component.find(".searchFunctionality");
    form.simulate("submit", Event);
    expect(form.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it("should call onChange method when the input change on search", () => {
    const spy = jest.spyOn(component.instance(), "onChange");
    component.instance().forceUpdate();

    const event = {
      target: { data: "Password12" }
    };

    const input = component.find(".searchIn").at(0);
    input.simulate("change", event);
    expect(input.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
});
