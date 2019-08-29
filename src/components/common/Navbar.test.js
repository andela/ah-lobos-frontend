import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

const props = {
  profile: {
    username: "User",
    image: {}
  },
  token: "",
  decodeToken: {}
};
it("it should render the navbar", () => {
  const numLinks = shallow(<Navbar {...props} />).find("Link").length;
  expect(numLinks).toEqual(0);
});

it("it should contain 0 links", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Navbar {...props} />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(0);
});
