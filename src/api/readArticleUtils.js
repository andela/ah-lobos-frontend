import jwt from "jsonwebtoken";

export async function handleResponse(response) {
  if (response.ok) {
    const { reactions } = await response.json();
    return reactions;
  }
  return "Network response was not ok.";
}

export async function hasReacted(reactions) {
  const token = sessionStorage.getItem("token");
  const decodeToken = await jwt.decode(token);
  const likes = [];
  const dislikes = [];
  const reactionData = {};
  reactions.forEach(reaction => {
    if (reaction.like) likes.push(reaction);
    if (reaction.dislike) dislikes.push(reaction);
    if (token) {
      if (reaction.userId === decodeToken.id) {
        reactionData.hasliked = reaction.like;
        reactionData.hasdisliked = reaction.dislike;
      }
    }
  });

  reactionData.likeNum = likes.length;
  reactionData.dislikeNum = dislikes.length;
  return reactionData;
}

export async function handleReaction(response) {
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return "Network response was not ok.";
}
