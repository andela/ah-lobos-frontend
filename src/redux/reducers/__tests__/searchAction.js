import { searchMethod } from "../../actions/SearchAction";

const option = "huhuyughu";
const title = "Hello world";
const dispatch = jest.fn(action => action);

describe("Search action", () => {
  it("should search", () => {
    const articleSearch = searchMethod(option, title)(dispatch);
    expect(articleSearch).toBeTruthy();
  });
});
