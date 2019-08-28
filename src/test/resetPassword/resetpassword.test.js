/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import { Reset } from "../../views/ResetPassword";
import { NewPassword } from "../../views/NewPassword";

const props = {
  email: {},
  setEmail: jest.fn(),
  passwords: {},
  confirmPassword: {},
  setNewPassword: jest.fn(),
  match: {
    params: {
      token: ""
    }
  }
};

describe("Reset component", () => {
  const component = shallow(<Reset {...props} />);
  const componentNew = shallow(<NewPassword {...props} />);
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
  it("renders without error", () => {
    expect(componentNew).toMatchSnapshot();
  });
  it("renders without errors new password", () => {
    const wrapper = componentNew.find(".resetButton");
    expect(wrapper.length).toBe(1);
  });
  it("should call onSubmit method when the button is clicked", () => {
    const spy = jest.spyOn(component.instance(), "onSubmit");
    component.instance().forceUpdate();

    const Event = { preventDefault: () => {} };
    const form = component.find(".reset");
    form.simulate("submit", Event);
    expect(form.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it("should call onSubmit method when the button is clicked password", () => {
    const spy = jest.spyOn(componentNew.instance(), "onSubmit");
    componentNew.instance().forceUpdate();
    const Event = { preventDefault: () => {} };
    const form = componentNew.find(".reset");
    form.simulate("submit", Event);
    expect(form.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it("should call onChange method when the input value is changed", () => {
    const spy = jest.spyOn(component.instance(), "onChange");
    component.instance().forceUpdate();

    const event = {
      target: { value: "manzif60@gmail.com" }
    };

    const input = component.find(".thisButton").at(0);
    input.simulate("change", event);
    expect(input.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it("should call onChange method when the input change new password", () => {
    const spy = jest.spyOn(componentNew.instance(), "onChange");
    componentNew.instance().forceUpdate();

    const event = {
      target: { value: "Password12" }
    };

    const input = componentNew.find(".thisPassword").at(0);
    input.simulate("change", event);
    expect(input.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
});
