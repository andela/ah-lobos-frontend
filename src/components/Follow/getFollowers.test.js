/* eslint-disable import/no-named-as-default */
import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { getFollower as View } from "./getFollowers";
import { mapStateToProps } from "./getFollowers";

const mockStore = configureStore();
const store = mockStore({});
const initialState = {
  getFollower: { followers: [] },
  profile: {},
  follower: {}
};
const newProps = {
  getFollowers: jest.fn(),
  followers: [
    {
      username: "hdqdjwb",
      image: "mbjewgv"
    }
  ],
  profile: {}
};
mapStateToProps(initialState);
const newcomponent = shallow(<View {...newProps} store={store} />);
describe("get followees component", () => {
  it("renders without errors", () => {
    expect(newcomponent).toMatchSnapshot();
  });
});
