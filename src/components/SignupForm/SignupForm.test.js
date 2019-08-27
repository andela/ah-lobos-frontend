/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import SignupForm from "./SignupForm";

const renderSignupForm = args => {
  const defaultProps = {
    user: {},
    onChange: () => {},
    onSave: () => {},
    registering: {},
    enabled: false,
    submitted: false,
    toggleShow: () => {},
    hidden: true,
    value: "string",
    send: "Creating account...",
    to: ""
  };

  const props = { ...defaultProps, ...args };
  return shallow(<SignupForm {...props} />);
};

it("renders form a header", () => {
  const wrapper = renderSignupForm();
  expect(wrapper.find("div").length).toBe(1);
});
