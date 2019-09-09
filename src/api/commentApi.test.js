import fetchMock from "fetch-mock";
import {
  commentArticle,
  getArticleComments,
  deleteComments,
  updateArticleComments
} from "./commentApi";

describe("Testing comments api fetch method", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should allow a user to comment on an article", async () => {
    const comment = {
      message: "Good article",
      userId: 1,
      timeStamp: "time goes here"
    };

    fetchMock.mock("*", {
      user: { token: "" }
    });

    await commentArticle(comment);
  });

  it("should get all comments for an article", async () => {
    const slug = "slug";

    fetchMock.mock("*", {
      comments: [{ id: 1, message: "comment one" }]
    });

    await getArticleComments(slug);
  });

  it("should delete a comment", async () => {
    const slug = "slug";
    const id = 1;

    fetchMock.mock("*", {
      comment: { id: 1, message: "deleted comment" }
    });

    await deleteComments(id, slug);
  });

  it("should update a comment", async () => {
    const data = {};
    const id = 2;

    fetchMock.mock("*", {
      comment: { id: 2, message: "updated comment" }
    });

    await updateArticleComments(data, id);
  });
});
