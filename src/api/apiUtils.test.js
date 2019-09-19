import {
  handleLoggout,
  handleError,
  handleResponse,
  commentResponse,
  deleteCommentResponse,
  updatedCommentResponse,
  handleGetConfig,
  handleUpdateConfig,
  getUserStats
} from "./apiUtils";

describe("Testing api utils ", () => {
  it("should handle a response", async () => {
    const response = JSON.stringify({
      ok: true,
      user: {
        token: "string",
        username: "adafia"
      }
    });
    await handleResponse(response);
  });

  it("should handle an error", async () => {
    const error = "API call failed.";
    await handleError(error);
  });

  it("should handle user loggout action", async () => {
    const response = JSON.stringify({
      ok: true,
      user: {}
    });
    await handleLoggout(response);
  });

  it("should handle user comment action", async () => {
    const response = JSON.stringify({
      ok: true,
      message: "some meassage"
    });
    await commentResponse(response);
  });

  it("should handle user comment action", async () => {
    const response = JSON.stringify({
      ok: true,
      message: "some meassage"
    });
    await deleteCommentResponse(response);
  });

  it("should handle user comment action", async () => {
    const response = JSON.stringify({
      ok: true,
      message: "some meassage"
    });
    await updatedCommentResponse(response);
  });

  it("should handle get notification configurations", async () => {
    const response = JSON.stringify({
      settings: {
        inApp: { articles: { show: true, on: ["publish", "comment", "like"] } },
        email: { articles: { show: true, on: ["publish"] } }
      }
    });
    await handleGetConfig(response);
  });

  it("should handle get user stats", async () => {
    const response = JSON.stringify({ allArticlesRead: 0, articlesRead: [] });
    await getUserStats(response);
  });

  it("should handle get notification configurations", async () => {
    const response = JSON.stringify({
      config: {
        id: 8,
        userId: 10,
        config:
          "{'inApp':{'articles':{'show':false,'on':['publish','comment'" +
          ",'like']}},'email':{'articles':{'show':true,'on':['publish']}}}",
        createdAt: "2019-09-12T08:32:33.333Z",
        updatedAt: "2019-09-12T10:34:22.764Z"
      }
    });
    await handleUpdateConfig(response);
  });
});
