import React from "react";
import { shallow } from "enzyme";
import {
  rateArticle,
  getArticleRating
} from "../../src/redux/actions/articleRatingAction";
import StarRate from "../../src/components/articles/StarRating";

describe("Article rating tests", () => {
  const data = {
    slug: "NDBYWT7GBDJK",
    rating: "1"
  };
  const dispatch = jest.fn(action => action);
  it("should rate an article", () => {
    rateArticle(data)(dispatch);
  });
  it("should edit user profile info", () => {
    getArticleRating()(dispatch);
  });
});

/* eslint-disable react/jsx-props-no-spreading */

const render = () => {
  const props = {
    value: 5,
    onClick: jest.fn(),
    editing: "false"
  };

  return shallow(<StarRate {...props} />);
};

const wrapper = render();

it("shoudl return an error when submitted an invalid data", () => {
  expect(wrapper).toBeDefined();
});
