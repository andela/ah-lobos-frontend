import React from "react";
import PropTypes from "prop-types";
import dislike from "../../assets/images/thumb-down.png";
import like from "../../assets/images/thumb-up.png";

const LikeComment = ({ commentLikes, onLike, onDisLike, token }) => {
  const numLikes = commentLikes.filter(likes => likes.like === true);
  return (
    <>
      <button id="like" className="like-button" onClick={onLike}>
        <img src={like} alt="like" className={token ? "" : "not-like"} />
      </button>{" "}
      {numLikes.length}
      <button id="dislike" className="dislike-button" onClick={onDisLike}>
        <img src={dislike} alt="dislike" className={token ? "" : "not-like"} />
      </button>
    </>
  );
};

LikeComment.propTypes = {
  commentLikes: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired,
  onDisLike: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
};

export default LikeComment;
