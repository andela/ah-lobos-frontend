import jwt from "jsonwebtoken";
import { hasReacted, handleReaction, handleResponse } from "./readArticleUtils";

describe("Testing read Article utils methods", () => {
  beforeEach(async () => {
    const key = "alliswell";
    const payload = {
      id: 6,
      username: "qanda",
      email: "qanda8@gmail.com",
      role: "normal"
    };
    const token = await jwt.sign(payload, key, { expiresIn: "24h" });

    sessionStorage.setItem("token", token);
  });
  it("should handle a response", async () => {
    const response = JSON.stringify({
      ok: true,
      reactions: [{ liked: true, disLiked: false, likes: 1, disLikes: 1 }]
    });
    await handleResponse(response);
  });

  it("should handle a response", async () => {
    const reactions = [{ like: true, disLike: false, userId: 1 }];
    await hasReacted(reactions);
  });

  it("should handle a reaction", async () => {
    const response = JSON.stringify({
      ok: true,
      reactions: { liked: true, disLiked: false, likes: 1, disLikes: 1 }
    });
    await handleReaction(response);
  });
});
