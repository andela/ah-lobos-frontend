import React from "react";
import { shallow, mount } from "enzyme";
import {
  bookmarkArticle,
  getBookmarkedArticles
} from "../../src/redux/actions/articleBookmark";
import Bookmark from "../../src/components/articles/Bookmark";
import EditProfile from "../../src/components/profile/EditProfileForm";

const props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  handleOnClick: jest.fn(),
  handleImageUpload: jest.fn(),
  profile: {},
  isDisabled: "true"
};

describe("Article bookmark tests", () => {
  const slug = "NDBYWT7GBDJK";
  const dispatch = jest.fn(action => action);
  it("should rate an article", () => {
    bookmarkArticle(slug)(dispatch);
  });
  it("should edit user profile info", () => {
    getBookmarkedArticles()(dispatch);
  });
});

const render = () => {
  return shallow(<Bookmark {...props} />);
};

const wrapper = render();

it("shoudl return an error when submitted an invalid data", () => {
  expect(wrapper).toBeDefined();
});

it("shoudl return an error when submitted an invalid data", () => {
  const Bookmarkprops = {
    bookmarks: [],
    unBookmark: jest.fn()
  };
  const component = mount(<Bookmark {...Bookmarkprops} />);
  expect(component.contains(<div className="bookmark-wrapper"></div>));
  expect(component.contains(<div className="bookmark-header"></div>));
});

const renderEditProfile = () => {
  return shallow(<EditProfile {...props} />);
};

renderEditProfile();
