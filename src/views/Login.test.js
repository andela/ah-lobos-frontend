import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "../redux/configureStore";
import Login from "./Login";
import "regenerator-runtime/runtime";

const store = configureStore();

function render(args) {
  const defaultProps = {
    history: {},
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    email: "adafia.samuel@gmail.com",
    password: "Dagger5533"
  };

  const props = { ...defaultProps, ...args };
  return mount(
    <Provider store={store}>
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>
    </Provider>
  );
}

it("Count number of div ", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const divNum = wrapper.find("div").length;
  expect(divNum).toEqual(8);
});
