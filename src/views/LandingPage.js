/* eslint-disable camelcase */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import Navbar from "../components/common/Navbar";
import Categories from "../components/common/Categories/Categories";
import ArticleCard from "../components/common/ArticleCard/ArticleCard";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture,
  logOutUser
} from "../redux/actions/userActions";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

export class HomePage extends Component {
  async componentDidMount() {
    await this.props.getUserProfile(username);
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
        <ArticleCard />
      </>
    );
  }
}
HomePage.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  logOutUser: propTypes.func
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getUserProfile, editUserProfile, editUserProfilePicture, logOutUser }
)(HomePage);
