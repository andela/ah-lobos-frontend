import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

it("it should render the navbar", () => {
  const numLinks = shallow(<Navbar />).find("Link").length;
  expect(numLinks).toEqual(2);
});

it("it should contain 3 links", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Navbar token="string" decodeToken="" />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(2);
});
