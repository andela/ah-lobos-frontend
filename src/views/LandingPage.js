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
import Articles from "../components/articles/Articles";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

export class HomePage extends Component {
  async componentDidMount() {
    await this.props.getUserProfile(username);
    await this.props.getArticles();
  }

  signOut = async () => {
    await this.props.logOutUser(token);
  };

  render() {
    return (
      <>
        <Navbar
          profile={this.props.profile}
          token={token}
          signOut={this.signOut}
        />
        <Categories />
        <Articles list={this.props.articles.articles} />
      </>
    );
  }
}
HomePage.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  logOutUser: propTypes.func,
  getArticles: propTypes.func.isRequired,
  articles: propTypes.object
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
