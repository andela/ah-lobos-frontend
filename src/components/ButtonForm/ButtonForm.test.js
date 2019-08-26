/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import ButtonForm from "./ButtonForm";

const renderButtonForm = args => {
  const defaultProps = {
    name: "",
    enabled: false,
    submitted: false
  };

  const props = { ...defaultProps, ...args };
  return shallow(<ButtonForm {...props} />);
};

it("renders form a header", () => {
  const wrapper = renderButtonForm();
  expect(wrapper.find("button").length).toBe(1);
});
