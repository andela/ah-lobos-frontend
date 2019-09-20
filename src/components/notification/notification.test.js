import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Notifications from "./Notifications";

const mockStore = configureStore();
const store = mockStore({});

const newProps = {
  readUserNotification: jest.fn(1)
};
const newcomponent = shallow(<Notifications {...newProps} store={store} />);
describe("get notification component", () => {
  it("renders without errors", () => {
    expect(newcomponent).toMatchSnapshot();
  });
});
