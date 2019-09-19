/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import Navbar from "../components/common/Navbar";
import Categories from "../components/common/Categories/Categories";
import { getArticles } from "../redux/actions/articlesAction";
import { getItemDataFromDatabase } from "../helpers/ItemFromEditor/getItemFromEditor";
import Articles from "../components/articles/Articles";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/common/Footer/Footer";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
sessionStorage.setItem("role", userPayload.role);
const isAdmin = sessionStorage.getItem("role");
console.log(isAdmin);
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
    await this.props.getArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.articles.articles.length > 0) {
      this.setState({ allArticles: newProps.articles.articles });
    }
  }

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
          <Navbar />
          <Categories />
          <div className="short-summary">
            <p id="cta">
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
          <Footer admin={isAdmin} articlesLen={this.state.allArticles.length} />
        </>
      );
    }
    return <>Loading...</>;
  }
}
HomePage.propTypes = {
  getArticles: propTypes.func.isRequired
};
const mapStateToProps = state => ({
  articles: state.articles
});
export default connect(
  mapStateToProps,
  {
    getArticles
  }
)(HomePage);
