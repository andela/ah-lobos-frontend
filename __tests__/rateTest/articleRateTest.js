import {
  rateArticle,
  getArticleRating
} from "../../src/redux/actions/articleRatingAction";

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
