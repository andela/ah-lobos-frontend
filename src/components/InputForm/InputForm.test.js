/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import InputForm from "./InputForm";

const renderInputForm = args => {
  const defaultProps = {
    name: "",
    value: "",
    onChange: () => {},
    placeholder: ""
  };

  const props = { ...defaultProps, ...args };
  return shallow(<InputForm {...props} />);
};

it("renders form a header", () => {
  const wrapper = renderInputForm();
  expect(wrapper.find("input").length).toBe(1);
});
