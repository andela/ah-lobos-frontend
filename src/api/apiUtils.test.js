import {
  handleLoggout,
  handleError,
  handleResponse,
  commentResponse,
  deleteCommentResponse,
  updatedCommentResponse
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
});
