import React from "react";
import PropTypes from "prop-types";
import bookmarkIcon from "../../../assets/images/bookmark-clear.png";
import bookmarkIconFill from "../../../assets/images/bookmark-fill.png";

const Bookmark = ({ bookmark, isBookmarked }) => {
  return (
    <>
      <button className="bookmark" onClick={bookmark}>
        {isBookmarked ? (
          <img className="hide-img" src={bookmarkIconFill} alt="bookmark" />
        ) : (
          <img className="hide-img" src={bookmarkIcon} alt="bookmark" />
        )}
      </button>
    </>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.func,
  isBookmarked: PropTypes.bool
};
export default Bookmark;
