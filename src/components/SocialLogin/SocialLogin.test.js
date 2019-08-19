/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import SocialLogin from "./SocialLogin";

const renderSocialLogin = args => {
  const defaultProps = {
    redirect: ""
  };
  const props = { ...defaultProps, ...args };
  return shallow(<SocialLogin {...props} />);
};

it("renders form a header", () => {
  const wrapper = renderSocialLogin();
  expect(wrapper.find("div").length).toBe(2);
});
