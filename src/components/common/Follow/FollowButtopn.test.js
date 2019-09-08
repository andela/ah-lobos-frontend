import React from "react";
import { shallow } from "enzyme";
import { FollowButton } from "./FollowButton";

const props = {
  followee: "",
  followUser: jest.fn(),
  unFollowUser: jest.fn()
};

describe("get followees component", () => {
  const component = shallow(<FollowButton {...props} />);
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
  it("should check `onClick()`", () => {
    const instance = component.instance();
    jest.spyOn(instance, "onClick");
    instance.onClick();
    expect(instance.onClick).toHaveBeenCalledTimes(1);
  });
  it("should check `unFollowonClick()`", () => {
    const instance = component.instance();
    jest.spyOn(instance, "unFollowonClick");
    instance.unFollowonClick();
    expect(instance.unFollowonClick).toHaveBeenCalledTimes(1);
  });
});
