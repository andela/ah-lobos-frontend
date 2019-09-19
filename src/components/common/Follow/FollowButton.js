/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import followImage from "../../../assets/images/follow.svg";
import unFollowImage from "../../../assets/images/unfollow.svg";
import { getFollowee, followUser } from "../../../redux/actions/followAction";

export class FollowButton extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  checkFollowing = username => {
    const dataUsername = [];
    this.props.followees &&
      this.props.followees.map(user => dataUsername.push(user.username));
    return dataUsername.includes(username);
  };

  render() {
    return (
      <>
        {this.checkFollowing(this.props.author) ? (
          <img
            src={unFollowImage}
            alt=""
            onClick={() => {
              this.props.unfollowAuser(this.props.author);
            }}
          />
        ) : (
          <img
            src={followImage}
            alt=""
            onClick={() => {
              this.props.followAuser(this.props.author);
            }}
          />
        )}
        {/* <div id="warn-follow" className="login-to-follow">
          Please{" "}
          <Link to={`/login?redirect=/article/${this.props.slug}`}> login</Link>
          to follow this user
        </div> */}
      </>
    );
  }
}
// const mapStateToProps = state => ({
//   followUser: state.followUser,
//   unFollowUser: state.unFollowAuser
// });

FollowButton.propTypes = {
  followees: propTypes.object,
  unfollowAuser: propTypes.func,
  followAuser: propTypes.func,
  author: propTypes.string
};
export default connect(
  null,
  { getFollowee, followUser }
)(FollowButton);
