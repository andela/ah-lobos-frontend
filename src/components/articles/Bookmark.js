import React from "react";
import propTypes from "prop-types";
import NoImg from "../../assets/images/article.png";

const handleOnClick = slug => {
  window.location.href = `/article/${slug}`;
};
const Bookmark = ({ bookmarks, unBookmark }) => {
  return (
    <>
      <div className="bookmark-header">
        <h1>Bookmarks</h1>
        <hr />
      </div>
      {bookmarks !== undefined ? (
        bookmarks.map(article => (
          <div className="bookmark-wrapper" key={article.slug}>
            <div className="bookmark-container">
              <div className="article-info-bookmark">
                <h1
                  onClick={() => {
                    handleOnClick(article.slug);
                  }}
                  role="presentation"
                >
                  {article.title}
                </h1>
                <p>{article.description}</p>
                <button
                  id="btn-bookmark"
                  className="btn-remove"
                  onClick={() => {
                    unBookmark(article.slug);
                  }}
                >
                  Unbookmark
                </button>
              </div>
              <div className="bookmarked-article-image">
                <img src={article.image || NoImg} alt="" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="not-found">
          <h1>Oops! No bookmarked articles found</h1>
        </div>
      )}
    </>
  );
};

Bookmark.propTypes = {
  bookmarks: propTypes.object,
  unBookmark: propTypes.func
};
export default Bookmark;
