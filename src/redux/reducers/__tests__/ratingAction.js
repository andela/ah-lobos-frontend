import { rateArticle } from "../../actions/articleRatingAction";

const data = {
  rates: 4
};

const dispatch = jest.fn(action => action);

describe("Article rating action", () => {
  it("should make article rating request", () => {
    const rateArticleRequest = rateArticle(data)(dispatch);
    expect(rateArticleRequest).toBeTruthy();
  });
});
