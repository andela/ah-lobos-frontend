/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import followImage from "../../../assets/images/follow.svg";
import unFollowImage from "../../../assets/images/unfollow.svg";
import {
  followUser,
  unFollowUser,
  getFollowee
} from "../../../redux/actions/followAction";

export class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    const token = sessionStorage.getItem("token");
    const msg = document.getElementById("warn-follow");
    if (!token) {
      msg.classList.add("show-it");
    }
    await this.props.followUser(token, this.props.author);
  }

  async unFollowonClick() {
    const token = sessionStorage.getItem("token");
    await this.props.unFollowUser(token, this.props.author);
  }

  render() {
    return (
      <>
        <button className="follow">
          {this.props.isFollowing ? (
            <img src={followImage} alt="" onClick={this.onClick} />
          ) : (
            <img src={unFollowImage} alt="" onClick={this.unFollowonClick} />
          )}
        </button>
        <div id="warn-follow" className="login-to-follow">
          Please{" "}
          <Link to={`/login?redirect=/article/${this.props.slug}`}> login</Link>
          to follow this user
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  follow: state.followAuser,
  unfollow: state.unFollowAuser,
  isFollowing: state.isFollowing
});

FollowButton.propTypes = {
  followUser: propTypes.func.isRequired,
  unFollowUser: propTypes.func.isRequired,
  isFollowing: propTypes.bool.isRequired,
  slug: propTypes.string,
  author: propTypes.string
};
export default connect(
  mapStateToProps,
  { followUser, unFollowUser, getFollowee }
)(FollowButton);
