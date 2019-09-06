/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import followImage from "../../../assets/images/follow.svg";
import unFollowImage from "../../../assets/images/unfollow.svg";
import { followUser, unFollowUser } from "../../../redux/actions/followAction";

export class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: true
    };
    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    await this.props.followUser(this.props.author);
  }

  changeFollow = () => {
    const { isFollowing } = this.state;
    this.setState({ isFollowing: !isFollowing });
  };

  async unFollowonClick() {
    await this.props.unFollowUser(this.props.author);
  }

  render() {
    return (
      <>
        <button className="follow" onClick={this.changeFollow}>
          {this.state.isFollowing ? (
            <img
              src={followImage}
              alt=""
              onClick={() => {
                this.onClick();
              }}
            />
          ) : (
            <img
              src={unFollowImage}
              alt=""
              onClick={() => {
                this.unFollowonClick();
              }}
            />
          )}
        </button>
      </>
    );
  }
}
const mapStateToProps = state => ({
  follow: state.follow,
  unfollow: state.unfollow
});

FollowButton.propTypes = {
  followUser: propTypes.func.isRequired,
  unFollowUser: propTypes.func.isRequired,
  author: propTypes.object
};
export default connect(
  mapStateToProps,
  { followUser, unFollowUser }
)(FollowButton);
