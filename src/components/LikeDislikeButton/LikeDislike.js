import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dislike from "../../assets/images/thumb-down.png";
import like from "../../assets/images/thumb-up.png";

const LikeDislike = ({ likeFunc, dislikeFunc, dislikeNum, likeNum, slug }) => (
  <>
    <button id="like" className="like-button" onClick={likeFunc}>
      <img src={like} alt="like" />
      {likeNum}
    </button>{" "}
    <button id="dislike" className="dislike-button" onClick={dislikeFunc}>
      <img src={dislike} alt="dislike" />
      {dislikeNum}
    </button>
    <div id="warn" className="login-to-react">
      Please <Link to={`/login?redirect=/article/${slug}`}>Login</Link> to
      perform this action
    </div>
  </>
);

LikeDislike.propTypes = {
  likeFunc: PropTypes.func,
  dislikeFunc: PropTypes.func,
  likeNum: PropTypes.number,
  dislikeNum: PropTypes.number,
  slug: PropTypes.string
};

export default LikeDislike;
