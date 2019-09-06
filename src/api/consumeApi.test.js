import fetchMock from "fetch-mock";
import { putData } from "./consumeApi";

describe("Testing comments api fetch method", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it.skip("should allow a user to comment on an article", async () => {
    const url = "url/string";
    const data = {};

    fetchMock.mock("*", {
      response: {}
    });

    await putData(url, data);
  });
});
