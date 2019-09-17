import {
  fetchReaction,
  likeAction,
  dislikeAction,
  fetchReactionSuccess
} from "../../actions/readArticleActions";

const slug = "kjrggheiv-1-9041";
const dispatch = jest.fn(action => action);

describe("read an article", () => {
  it("should do actions on article", () => {
    const result = fetchReactionSuccess(slug);
    const readArticle = fetchReaction(slug)(dispatch);
    const likeResult = likeAction(slug)(dispatch);
    const dislikeResult = dislikeAction(slug)(dispatch);
    expect(result).toHaveProperty("type");
  });
});
