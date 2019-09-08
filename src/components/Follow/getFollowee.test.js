/* eslint-disable import/no-named-as-default */
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import GetFollower from "./getFollowee";

const mockStore = configureStore();
const store = mockStore({});
const component = shallow(
  <Provider store={store}>
    <GetFollower />
  </Provider>
);
describe("get followees component", () => {
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
});
