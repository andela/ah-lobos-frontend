/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import SignupLeftSide from "./SignupLeftSide";

it("renders form a header", () => {
  const wrapper = shallow(<SignupLeftSide />);
  expect(wrapper.find("h1").length).toBe(1);
});
