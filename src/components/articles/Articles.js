import React from "react";
import moment from "moment";
import propTypes from "prop-types";
import ArticlePlaceHolder from "../../assets/images/article.png";

const handleOnClick = slug => {
  window.location.href = `/article/${slug}`;
};

const Articles = ({ list }) => {
  return (
    <>
      <div className="short-summary">
        <p>
          Join a community of like minded authors to foster inspiration and
          innovation by leveraging the modern web.
        </p>
      </div>
      <div className="article-container">
        {list !== undefined
          ? list.map(story => (
              <div className="article-space" key={story.slug}>
                <div className="article-image">
                  <img src={story.image || ArticlePlaceHolder} alt="" />
                </div>
                <div className="article-title">{story.title}</div>
                <div className="article-body">
                  <p>{story.body}</p>
                </div>
                <div className="article-author">
                  - Written by {story.author.username}
                </div>
                <div className="article-rates">
                  <div>
                    <span>{moment(story.createdAt).format("MM-DD")} . </span>
                    <span>{story.readtime}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleOnClick(story.slug);
                  }}
                >
                  Read
                </button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

Articles.propTypes = {
  list: propTypes.object.isRequired
};

export default Articles;
