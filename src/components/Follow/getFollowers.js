/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  getFollowers,
  followUser,
  unFollowUser
} from "../../redux/actions/followAction";
import UserProfile from "../profile/UserProfile";

export class getFollower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: "",
      isFollowing: false
    };
    this.onClick = this.onClick.bind(this);
  }

  async componentDidMount() {
    const token = sessionStorage.getItem("token");
    await this.props.getFollowers(token);
  }

  async onClick(username) {
    await this.props.followUser(username);
  }

  changeFollow = () => {
    const { isFollowing } = this.state;
    this.setState({ isFollowing: !isFollowing });
  };

  async unFollowonClick(username) {
    await this.props.unFollowUser(username);
  }

  render() {
    return (
      <>
        <div>
          <div className="getFollow">
            <div className="firstDiv" />
            <div>
              <div className="chooseFollow">
                <Link to="/followee">
                  <p>Following</p>
                </Link>
                <Link to="/follow">
                  <p>Followers</p>
                </Link>
                <hr color="#0D9BC6" id="lineFollowers" />
              </div>
              {this.props.follower !== undefined &&
              typeof this.props.follower !== "string"
                ? this.props.follower.map(follow => {
                    return (
                      <div className="followers" key={follow.username}>
                        <img
                          src={follow.image}
                          alt=""
                          className="FollowerImage"
                        />
                        <p id="nameFollow">
                          <span id="namesSize">
                            {follow.firstName} {follow.lastName}{" "}
                          </span>
                          <span className="emailShowing">{follow.email}</span>
                        </p>
                        <p className="followOrNot">
                          <span>@{follow.username} </span>
                          Follower
                        </p>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="ProfileDiv">
              <UserProfile profile={this.props.profile} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  follower: state.follower.followers,
  follow: state.follow,
  unfollow: state.unfollow,
  profile: state.profile
});
getFollower.propTypes = {
  getFollowers: propTypes.func.isRequired,
  followUser: propTypes.func.isRequired,
  unFollowUser: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  follower: propTypes.array
};

export default connect(
  mapStateToProps,
  { getFollowers, followUser, unFollowUser }
)(getFollower);
