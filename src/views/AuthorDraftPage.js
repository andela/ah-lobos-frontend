/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import articleImage from "../assets/images/article.png";
import { getUserProfile } from "../redux/actions/userActions";
import {
  getAuthorArticles,
  deleteArticle
} from "../redux/actions/articleActions";
import { getItemDataFromDatabase } from "../helpers/ItemFromEditor/getItemFromEditor";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

class AuthorArticlesPage extends Component {
  async componentDidMount() {
    await this.props.getUserProfile(username);
    if (this.props.profile.username === "") {
      location.href = "/";
    }
    await this.props.getAuthorArticles();
  }

  onDelete(slug) {
    this.props.deleteArticle(slug);
    setTimeout(() => this.props.getAuthorArticles(), 500);
  }

  render() {
    const checkDraftFound = [];
    if (this.props.myArticles.articles) {
      return (
        <>
          <Navbar profile={this.props.profile} token={token} />
          <div className="articles-container">
            <div className="article-head">
              <h1 style={{ color: "grey" }}>My drafts</h1>
            </div>
            {this.props.myArticles.articles.map(article => {
              const data = getItemDataFromDatabase(article);
              if (article.draft) {
                checkDraftFound.push(article.draft);
                return (
                  <div className="user-articles" key={article.id}>
                    <div className="article-side">
                      <Link
                        to={`/articles/${article.slug}`}
                        className="author-article-title"
                      >
                        <h1 className="article-side-title">{article.title}</h1>
                      </Link>
                      <p className="article-side-desc">
                        {`${article.description.substr(0, 220)}...`}
                      </p>
                      <p className="article-side-footer">
                        - {article.author.username}{" "}
                        <span style={{ float: "right" }}>
                          <Link
                            to={`/article/${article.slug}/edit`}
                            className="edit-article"
                          >
                            <i className="fa fa-edit" />
                          </Link>{" "}
                          <button
                            onClick={() => this.onDelete(article.slug)}
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="fa fa-trash"
                              style={{ color: "red" }}
                            />
                          </button>
                        </span>
                      </p>
                    </div>
                    <div className="article-image">
                      <img
                        src={data.image || articleImage}
                        alt=""
                        style={{
                          height: "200px",
                          width: "80%",
                          float: "right",
                          objectFit: "fill"
                        }}
                      />
                    </div>
                  </div>
                );
              }
              return null;
            })}
            {checkDraftFound.length === 0 ? (
              <div className="not-found">No draft article found...</div>
            ) : null}
          </div>
        </>
      );
    }
    return (
      <>
        <Navbar profile={this.props.profile} token={token} />
        <div className="article-container">
          <h1 style={{ color: "grey" }}>
            You have not created any draft article yet!
          </h1>
          <Link
            to="/article/new"
            style={{ color: "#0D9BC6", textDecoration: "none" }}
          >
            Create new article
          </Link>
        </div>
      </>
    );
  }
}

AuthorArticlesPage.propTypes = {
  profile: PropTypes.object.isRequired,
  myArticles: PropTypes.object.isRequired,
  getAuthorArticles: PropTypes.func.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    myArticles: state.articles.myArticles,
    deletedArticle: state.articles.deletedArticle
  };
};

const mapDispatchToProps = {
  getUserProfile,
  getAuthorArticles,
  deleteArticle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorArticlesPage);
