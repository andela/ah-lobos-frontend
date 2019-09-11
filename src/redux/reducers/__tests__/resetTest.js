import { setEmail } from "../../actions/resetAction";

const data = "huhuyughu";
const dispatch = jest.fn(action => action);

describe("Reset action", () => {
  it("should make a report article request", () => {
    setEmail(data)(dispatch);
  });
});
