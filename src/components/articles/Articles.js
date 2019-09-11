/* eslint-disable max-len */
import React from "react";
import moment from "moment";
import propTypes from "prop-types";
import ArticlePlaceHolder from "../../assets/images/article.png";

const handleOnClick = slug => {
  window.location.href = `/articles/${slug}`;
};

let imageCheck = [];

const Articles = ({ article, data }) => {
  if (article.image !== null) {
    imageCheck = article.image.split(".");
  }
  return (
    <>
      <div className="article-space" key={article.slug}>
        <div className="article-image">
          <img
            src={
              imageCheck.includes("jpg") && article.image !== null
                ? article.image
                : ArticlePlaceHolder
            }
            alt=""
          />
        </div>
        <div className="article-title">{data.title}</div>
        <div className="article-body">
          <p>{data.description}</p>
        </div>
        <div className="article-author">
          - Written by {data.author.username}
        </div>
        <div className="article-rates">
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
          Read
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
