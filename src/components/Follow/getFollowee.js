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
    const token = sessionStorage.getItem("token");
    await this.props.getFollowee(token);
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
                typeof this.props.followees !== "string" &&
                this.props.followees.map(follow => {
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
                })}{" "}
              {typeof this.props.followees === "string" ? (
                <div className="zero-Followers">
                  You do not follow anyone yet.
                </div>
              ) : null}
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
  followees: state.getFollowee.followees,
  profile: state.profile
});
getFollower.propTypes = {
  getFollowee: propTypes.func,
  followees: propTypes.array,
  profile: propTypes.object
};

export default connect(
  mapStateToProps,
  { getFollowee, followUser, unFollowUser }
)(getFollower);
