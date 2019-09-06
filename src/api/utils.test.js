import { handleError, handleResponse } from "./utils";

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

  it("should handle a response", async () => {
    const error = "error message";
    await handleError(error);
  });
});
