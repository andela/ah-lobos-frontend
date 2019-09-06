/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  followUser,
  unFollowUser,
  getFollowee
} from "../../redux/actions/followAction";
import UserProfile from "../profile/UserProfile";

export class getFollower extends Component {
  async componentDidMount() {
    await this.props.getFollowee();
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
                  <p className="followingParagraph">Following</p>
                </Link>
                <Link to="/follow">
                  <p>Followers</p>
                </Link>
                <hr color="#0D9BC6" id="lineFollowees" />
              </div>
              {this.props.followees !== undefined &&
              typeof this.props.followees !== "string"
                ? this.props.followees.map(follow => {
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
                          Following
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

export const mapStateToProps = state => {
  return {
    followees: state.getFollowee.followees,
    profile: state.profile
  };
};
getFollower.propTypes = {
  getFollowee: propTypes.func.isRequired,
  followees: propTypes.array,
  profile: propTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getFollowee, followUser, unFollowUser }
)(getFollower);
