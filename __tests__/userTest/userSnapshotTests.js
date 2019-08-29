/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import { HomePage } from "../../src/views/LandingPage";
import EditProfile from "../../src/components/profile/EditProfileForm";
import UserProfile from "../../src/components/profile/UserProfile";

const props = {
  getUserProfile: jest.fn(),
  editUserProfile: jest.fn(),
  editUserProfilePicture: jest.fn(),
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  handleImageUpload: jest.fn(),
  handleFiles: jest.fn(),
  profile: {},
  token: {}
};
describe("<HomePage />", () => {
  const home = shallow(<HomePage {...props} />);
  const editProfile = shallow(<EditProfile {...props} />);
  const userProfile = shallow(<UserProfile {...props} />);

  it("renders without errors", () => {
    expect(home).toMatchSnapshot();
  });

  it("renders without errors", () => {
    expect(editProfile).toMatchSnapshot();
  });

  it("renders without errors", () => {
    expect(userProfile).toMatchSnapshot();
  });
  it("should call onSubmit method when the button is clicked", () => {
    home.instance().forceUpdate();
    const Event = { preventDefault: () => {} };
    const form = editProfile.find(".edit");
    form.simulate("submit", Event);
    expect(form.length).toBe(1);
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
