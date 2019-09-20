import {
  reportArticle,
  reportRequest,
  reportFailure
} from "../../actions/reportActions";

const slug = "huhuyughu";
const message = "Hello world";
const error = "not found";
const dispatch = jest.fn(action => action);
const report = {
  message: "spam"
};
describe("Report article action", () => {
  it("should make a report article request", () => {
    const articleReport = reportRequest(message);
    expect(articleReport).toHaveProperty("type");
  });

  it("should report an article", () => {
    const articleReport = reportArticle(slug, report)(dispatch);
    expect(articleReport).toBeTruthy();
  });

  it("should not report an article with invalid slug", () => {
    const articleReport = reportFailure(error);
    expect(articleReport).toHaveProperty("type");
  });
});
