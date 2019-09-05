import React from "react";
import propTypes from "prop-types";

const AuthorInfo = ({ article }) => {
  return (
    <>
      <div className="author-info">
        <div className="author-avi">
          <img src={article.author.image} alt="sam" />
        </div>

        <div className="name-time">
          <div className="author-name">{article.author.firstName}</div>
          <div className="read-time">{article.readtime}</div>
        </div>
      </div>
    </>
  );
};

AuthorInfo.propTypes = {
  article: propTypes.object
};

export default AuthorInfo;
