import fetchMock from "fetch-mock";
import { createStats, getAllUserStats } from "./readingStatsApi";

describe("Testing user reading stats api fetch methods", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should create the reading stats for a user", async () => {
    const slug = "slug-slow";

    fetchMock.mock("*", {
      user: { token: "" }
    });

    await createStats(slug);
  });

  it("should get the reading stats an existing user", async () => {
    fetchMock.mock("*", {
      user: { token: "" }
    });
    await getAllUserStats();
  });
});
