/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import PasswordForm from "./PasswordForm";

const renderPasswordForm = args => {
  const defaultProps = {
    name: "",
    value: "",
    placeholder: "",
    onChange: () => {},
    hidden: false,
    toggleShow: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<PasswordForm {...props} />);
};

it("renders form a header", () => {
  const wrapper = renderPasswordForm();
  expect(wrapper.find("input").length).toBe(1);
});
