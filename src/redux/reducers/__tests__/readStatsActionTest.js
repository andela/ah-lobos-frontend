import { createStats, getStats } from "../../actions/readingStatsAction";

const slug = "kjrggheiv-1-9041";
const dispatch = jest.fn(action => action);

describe("read stats", () => {
  it("should create a read stats", () => {
    const state = createStats(slug)(dispatch);
    const getAllStats = getStats()(dispatch);
    expect(state).toBeTruthy();
    expect(getAllStats).toBeTruthy();
  });
});
