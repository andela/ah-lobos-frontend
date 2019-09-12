/* eslint-disable import/no-named-as-default */
import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import getFollowee, { getFollower as View } from "./getFollowee";
import { mapStateToProps } from "./getFollowee";

const mockStore = configureStore();
const store = mockStore({});
const initialState = {
  getFollowee: { followees: [] },
  profile: {}
};
const newProps = {
  getFollowee: jest.fn(),
  followees: [
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
