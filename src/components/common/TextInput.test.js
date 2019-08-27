import React from "react";
import { shallow } from "enzyme";
import TextInput from "./TextInput";

function renderTextInput(args) {
  const defaultProps = {
    type: "",
    name: "",
    placeholder: "",
    value: "",
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<TextInput {...props} />);
}

it("renders the TextInput", () => {
  const wrapper = renderTextInput();
  expect(wrapper.find("input").length).toBe(1);
});
