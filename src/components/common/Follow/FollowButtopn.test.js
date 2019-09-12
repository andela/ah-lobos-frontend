import React from "react";
import { shallow } from "enzyme";
import { FollowButton } from "./FollowButton";

const token = "sddsds";
const user = "dssdss";
const props = {
  followee: "",
  followUser: jest.fn(token, user),
  unFollowUser: jest.fn(token, user)
};
window.open = jest.fn();
describe("get followees component", () => {
  const component = shallow(<FollowButton {...props} />);
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
  it("use the method on click event ", () => {
    component.instance().onClick();
  });
  it("use the method on click event ", () => {
    component.instance().unFollowonClick();
  });
});
