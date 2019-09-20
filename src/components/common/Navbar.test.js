import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Navbar from "./Navbar";
import configureStore from "../../redux/configureStore";

const store = configureStore();
function render(args) {
  const defaultProps = {
    history: {},
    profile: {},
    onClick: jest.fn(),
    signOut: jest.fn(),
    handleChange: jest.fn(),
    match: {},
    location: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(
    <Provider store={store}>
      <Router>
        <Navbar {...props} />
      </Router>
    </Provider>
  );
}

it("Count number of Div's in the navbar", () => {
  const wrapper = render();
  const numDiv = wrapper.find("div").length;
  expect(numDiv).toEqual(10);
});

it("Should navigate to the login page when the button is clicked", () => {
  const wrapper = render();
  wrapper
    .find(".login")
    .first()
    .simulate("click");
  const loginPage = wrapper.find("Link").length;
  expect(loginPage).toEqual(10);
});

it("Should navigate to the sign-up page when the button is clicked", () => {
  const wrapper = render();
  wrapper
    .find(".signup")
    .first()
    .simulate("click");
  const signUpPage = wrapper.find("div").length;
  expect(signUpPage).toEqual(10);
});

it("Should navigate to the sign-up page when the button is clicked", () => {
  const wrapper = render();
  wrapper
    .find(".in-app-notify")
    .first()
    .simulate("change");
  const signUpPage = wrapper.find("div").length;
  expect(signUpPage).toEqual(10);
  wrapper.unmount();
});

it("Should navigate to the sign-up page when the button is clicked", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Navbar profile={{ username: "qanda", image: "image-url" }} />
        </Router>
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
