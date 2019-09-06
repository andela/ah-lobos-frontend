import React from "react";
import { shallow } from "enzyme";
import SocialLogin from "./SocialLogin";
import socialLoginAction from "../../redux/actions/socialLoginAction";

const renderSocialLogin = args => {
  const defaultProps = {
    redirect: "",
    to: "",
    path: ""
  };
  const props = { ...defaultProps, ...args };
  return shallow(<SocialLogin {...props} />);
};

it("renders form a header", () => {
  const wrapper = renderSocialLogin();
  expect(wrapper.find("div").length).toBe(2);
});
it("renders two emages in social login component", () => {
  window.open = () => {};
  const wrapper = renderSocialLogin();
  wrapper.find(".facebook").simulate("click");
  wrapper.find(".google").simulate("click");
  wrapper.find(".twitter").simulate("click");
  expect(wrapper.find("img").length).toBe(3);
});
describe("Social Login", () => {
  const dispatch = jest.fn(action => action);
  it("should login using social media", () => {
    const login = socialLoginAction({
      email: "email@email",
      token: "the-token"
    })(dispatch);
  });
  it("should not login using social media", () => {
    const loginError = socialLoginAction({})(dispatch);
  });
});
