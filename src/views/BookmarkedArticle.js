/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Navbar from "../components/common/Navbar";
import { getUserProfile } from "../redux/actions/userActions";
import Bookmarks from "../components/articles/Bookmark";
import {
  getBookmarkedArticles,
  unBookmarkArticle
} from "../redux/actions/articleBookmark";

const token = sessionStorage.getItem("token");
const username = sessionStorage.getItem("username");
export class BookmarkedArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleUnbookmark = this.handleUnbookmark.bind(this);
  }

  async componentDidMount() {
    await this.props.getUserProfile(username);
    await this.props.getBookmarkedArticles();
    if (!token) {
      // eslint-disable-next-line no-restricted-globals
      location.href = "/";
    }
  }

  async handleUnbookmark(slug) {
    await this.props.unBookmarkArticle(slug);
    await this.props.getBookmarkedArticles();
  }

  render() {
    return (
      <>
        <Navbar profile={this.props.profile} token={token} />
        <Bookmarks
          bookmarks={this.props.bookmarks}
          unBookmark={this.handleUnbookmark}
        />
      </>
    );
  }
}
BookmarkedArticle.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  getBookmarkedArticles: propTypes.any,
  bookmarks: propTypes.object,
  unBookmarkArticle: propTypes.func
};
const mapStateToProps = state => ({
  profile: state.profile,
  bookmarks: state.bookmarks.bookmarks
});
export default connect(
  mapStateToProps,
  { getUserProfile, getBookmarkedArticles, unBookmarkArticle }
)(BookmarkedArticle);
