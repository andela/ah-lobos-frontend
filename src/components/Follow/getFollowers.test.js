import React from "react";
import { shallow } from "enzyme";
import { getFollower as View } from "./getFollowers";

const newProps = {
  followers: [
    {
      username: "hdqdjwb",
      image: "mbjewgv"
    }
  ],
  follow: jest.fn(),
  unfollow: jest.fn(),
  profile: {},
  followUser: jest.fn(),
  unFollowUser: jest.fn()
};

const newcomponent = shallow(<View {...newProps} />);
describe("get followees component", () => {
  it("renders without errors", () => {
    expect(newcomponent).toMatchSnapshot();
  });
});
