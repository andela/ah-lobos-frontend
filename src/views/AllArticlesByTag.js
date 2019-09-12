/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import Navbar from "../components/common/Navbar";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture,
  logOutUser
} from "../redux/actions/userActions";
import { getArticles } from "../redux/actions/articlesAction";
import { getItemDataFromDatabase } from "../helpers/ItemFromEditor/getItemFromEditor";
import ArticlesByTag from "../components/articles/ArticlesByTag";
import Pagination from "../components/Pagination/Pagination";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      currentPage: 1,
      articlePerPage: 8
    };
  }

  async componentDidMount() {
    await this.props.getUserProfile(username);
    await this.props.getArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.articles.articles) {
      this.setState({ allArticles: newProps.articles.articles });
    }
  }

  signOut = async () => {
    await this.props.logOutUser(token);
  };

  next = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  previous = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  paginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { allArticles, currentPage, articlePerPage } = this.state;
    const indexOfLastArticle = currentPage * articlePerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
    const currentArticles = allArticles.slice(
      indexOfFirstArticle,
      indexOfLastArticle
    );
    const url = window.location.pathname.split("/");
    const tagName = url[url.length - 1];
    if (currentArticles) {
      return (
        <>
          <Navbar
            profile={this.props.profile}
            token={token}
            signOut={this.signOut}
          />
          <div className="tag-article-container">
            <br />
            <div className="tags-container">
              <h4 style={{ color: "grey" }}>TAGGED IN</h4>
              <h1 className="tagName">{decodeURI(tagName)}</h1>
            </div>
            <hr
              style={{
                width: "75%",
                marginLeft: "6%",
                color: "grey"
              }}
            />
            {currentArticles.map(article => {
              if (article.tagList.includes(decodeURI(tagName))) {
                return (
                  <ArticlesByTag
                    key={article.id}
                    article={getItemDataFromDatabase(article)}
                    data={article}
                  />
                );
              }
              return null;
            })}
          </div>
          <Pagination
            articlesPerPage={this.state.articlePerPage}
            totalArticles={this.state.allArticles.length}
            paginate={this.paginate}
            next={this.next}
            previous={this.previous}
            currentPage={this.state.currentPage}
          />
        </>
      );
    }
    return <>Loading...</>;
  }
}
HomePage.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  logOutUser: propTypes.func,
  getArticles: propTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  articles: state.articles
});
export default connect(
  mapStateToProps,
  {
    getUserProfile,
    editUserProfile,
    editUserProfilePicture,
    getArticles,
    logOutUser
  }
)(HomePage);
