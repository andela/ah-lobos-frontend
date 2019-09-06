/* eslint-disable max-len */
import React from "react";
import moment from "moment";
import propTypes from "prop-types";
import ArticlePlaceHolder from "../../assets/images/article.png";

const handleOnClick = slug => {
  window.location.href = `/articles/${slug}`;
};

const Articles = ({ article, data }) => {
  return (
    <>
      <div className="tag-article-space" key={article.slug}>
        <div className="tag-article-image">
          <img src={article.image || ArticlePlaceHolder} alt="" />
        </div>
        <div className="tag-article-title">{data.title}</div>
        <div className="tag-article-body">
          <p>{data.description}</p>
        </div>
        <div className="tag-article-author">
          - Written by {data.author.username}
        </div>
        <div className="tag-article-rates">
          <div>
            <span>{moment(article.createdAt).format("MM-DD")} . </span>
            <span>{data.readtime}</span>
          </div>
        </div>
        <button
          onClick={() => {
            handleOnClick(data.slug);
          }}
        >
          Read more
        </button>
      </div>
    </>
  );
};

Articles.propTypes = {
  article: propTypes.array.isRequired,
  data: propTypes.object.isRequired
};

export default Articles;
