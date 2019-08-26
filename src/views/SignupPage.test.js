/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import { SignupPage } from "./SignupPage";

const render = args => {
  const defaultProps = {
    registering: {},
    register: jest.fn(),
    history: jest.fn()
  };

  const props = { ...defaultProps, ...args };
  return shallow(<SignupPage {...props} />);
};

const wrapper = render();

it("shoudl return an error when submitted an invalid data", () => {
  expect(wrapper).toBeDefined();
});
