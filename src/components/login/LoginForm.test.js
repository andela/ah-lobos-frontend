import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";

function renderLoginForm(args) {
  const defaultProps = {
    handleChange: () => {},
    handleSubmit: () => {},
    toggleShow: () => {},
    submitted: false,
    hidden: true,
    enabled: false,
    email: "",
    password: "",
    value: "string",
    send: ""
  };

  const props = { ...defaultProps, ...args };
  return shallow(<LoginForm {...props} />);
}

it("renders the Login form", () => {
  const wrapper = renderLoginForm();
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h1").text()).toEqual("Welcome Back!");
});
