import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

const props = {
  profile: {
    username: "User",
    image: {}
  },
  token: ""
};
it("it should render the navbar", () => {
  const numLinks = shallow(<Navbar {...props} />).find("Link").length;
  expect(numLinks).toEqual(1);
});

it("it should contain 0 links", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Navbar {...props} />
    </MemoryRouter>
  ).find("Link").length;

  expect(numAnchors).toEqual(7);
});
