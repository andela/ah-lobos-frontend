import React, { Component } from "react";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import Navbar from "../components/common/Navbar";
import GetFollowee from "../components/Follow/getFollowee";
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

export class Followee extends Component {
  async componentDidMount() {
    await this.props.getUserProfile(username);
  }

  signOut = async () => {
    await this.props.logOutUser(token);
  };

  render() {
    return (
      <>
        <Navbar />
        <GetFollowee />
      </>
    );
  }
}
Followee.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  logOutUser: propTypes.func
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  {
    getUserProfile,
    editUserProfile,
    editUserProfilePicture,
    logOutUser
  }
)(Followee);
