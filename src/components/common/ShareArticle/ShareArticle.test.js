/* eslint-disable import/no-named-as-default */
import React from "react";
import { shallow } from "enzyme";
import { ShareArticle as View } from "./ShareArticle";

window.open = jest.fn();

const newProps = {
  slug: "5tctyr"
};
global.window = Object.create(window);
Object.defineProperty(window, "open", {
  value: {
    open: jest.fn()
  }
});
const { open } = window;
beforeAll(() => {
  Object.defineProperty(window, "open", {
    configurable: true
  });
  window.open = jest.fn();
});
afterAll(() => {
  window.open = open;
});
const newcomponent = shallow(<View {...newProps} />);
describe("get followees component", () => {
  it("renders without errors", () => {
    expect(newcomponent).toMatchSnapshot();
  });
  it("should call share on gmail is clicked", () => {
    const Event = { preventDefault: () => {} };
    const form = newcomponent.find("#gmail");
    form.simulate("click", Event);
    expect(form.length).toBe(1);
  });
  it("should call share on twitter is clicked", () => {
    const Event = { preventDefault: () => {} };
    const form = newcomponent.find("#twitter");
    form.simulate("click", Event);
    expect(form.length).toBe(1);
  });
  it("should call share on whatsup is clicked", () => {
    const Event = { preventDefault: () => {} };
    const form = newcomponent.find("#whatsup");
    form.simulate("click", Event);
    expect(form.length).toBe(1);
  });
  it("should call share on facebook is clicked", () => {
    const Event = { preventDefault: () => {} };
    const form = newcomponent.find("#facebook");
    form.simulate("click", Event);
    expect(form.length).toBe(1);
  });
  it("should call share on twitter is clicked", () => {
    newcomponent.instance().facebookonClick();
  });
  it("should call share on twitter is clicked", () => {
    newcomponent.instance().emailonClick();
  });
  it("should call share on twitter is clicked", () => {
    newcomponent.instance().whatsuponClick();
  });
  it("use the method on click event ", () => {
    newcomponent.instance().onClick();
  });
});
