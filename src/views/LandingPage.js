/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import Navbar from "../components/common/Navbar";
import Categories from "../components/common/Categories/Categories";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture,
  logOutUser
} from "../redux/actions/userActions";
import { getArticles } from "../redux/actions/articlesAction";
import { getItemDataFromDatabase } from "../helpers/ItemFromEditor/getItemFromEditor";
import Articles from "../components/articles/Articles";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/common/Footer/Footer";
import { searchMethod } from "../redux/actions/searchAction";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
sessionStorage.setItem("role", userPayload.role);
const username = sessionStorage.getItem("username") || "";
const isAdmin = sessionStorage.getItem("role");
console.log(isAdmin);
export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      currentPage: 1,
      articlePerPage: 8
      // redirect: false
    };
  }

  async componentDidMount() {
    await this.props.getUserProfile(username);
    await this.props.getArticles();
    if (isAdmin === "admin") {
      // this.setState({ redirect: true });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.articles.articles.length > 0) {
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
    if (currentArticles) {
      return (
        <>
          <Navbar
            profile={this.props.profile}
            token={token}
            signOut={this.signOut}
            search={this.props}
            searchData={this.props.searchData}
          />
          <Categories />
          <div className="short-summary">
            <p>
              Join a community of like minded authors to foster inspiration and
              innovation by leveraging the modern web.
            </p>
          </div>
          <div className="article-container">
            {currentArticles.map(article => {
              if (!article.draft) {
                return (
                  <Articles
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
          <Footer admin={isAdmin} />
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
  getArticles: propTypes.func.isRequired,
  searchData: propTypes.array
};
const mapStateToProps = state => ({
  profile: state.profile,
  articles: state.articles,
  searchData: state.searchData
});
const mapDispatchToProps = {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture,
  getArticles,
  logOutUser,
  searchMethod
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
