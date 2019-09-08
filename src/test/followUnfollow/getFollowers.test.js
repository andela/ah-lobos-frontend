/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import { Follow } from "../../views/Follow";

const props = {
  isFollowing: false,
  getUserProfile: {}
};

describe("Get follower component", () => {
  const component = shallow(<Follow {...props} />);
  it("renders without errors", () => {
    expect(component).toMatchSnapshot();
  });
});
