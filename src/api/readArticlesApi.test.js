import fetchMock from "fetch-mock";
import { likeArticle, fetchReactions, dislikeArticle } from "./readArticleApi";

describe("Testing read Article Api fetch methods", () => {
  beforeEach(() => {
    sessionStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwid…A1MX0." +
        "xIOwsL5w9vuxPR93ZmGvfC54eLfin1se7GAkzJUmnhk"
    );
  });
  afterEach(() => {
    fetchMock.restore();
  });

  const slug = "";
  const reaction = { liked: true, disLiked: false, likes: 1, disLikes: 1 };

  it("should fetch all user reactions", async () => {
    fetchMock.mock("*", {
      user: { token: "" }
    });

    await fetchReactions(slug);
  });

  it("should perform a like action on an article", async done => {
    fetchMock.mock("*", {
      reaction
    });
    try {
      await likeArticle(slug);
      done();
    } catch (error) {
      console.log(error);
    }
  });

  it("should perform a dislike action on an article", async () => {
    fetchMock.mock("*", {
      reaction
    });

    await dislikeArticle(slug);
  });
});
