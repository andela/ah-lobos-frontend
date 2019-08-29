/* eslint-disable camelcase */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import Navbar from "../components/common/Navbar";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture
} from "../redux/actions/userActions";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

export class HomePage extends Component {
  async componentDidMount() {
    await this.props.getUserProfile(username);
  }

  render() {
    return (
      <>
        <Navbar profile={this.props.profile} token={token} />
      </>
    );
  }
}
HomePage.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getUserProfile, editUserProfile, editUserProfilePicture }
)(HomePage);
