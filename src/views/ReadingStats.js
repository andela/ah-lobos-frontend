import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import TimeAgo from "react-timeago";
import englishStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import Navbar from "../components/common/Navbar";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture,
  logOutUser
} from "../redux/actions/userActions";
import { getStats } from "../redux/actions/readingStatsAction";

const formatter = buildFormatter(englishStrings);
const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

export class UserStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.userStats = [];
  }

  async componentDidMount() {
    await this.props.getUserProfile(username);
    await this.props.getStats();
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
        <div className="stats-container">
          <br />
          <div className="tags-container">
            <h1 className="tagName">Stats</h1>
            <h3 style={{ color: "grey" }}>
              Click story below to view in chart
            </h3>
          </div>
          <hr
            style={{
              display: "block",
              height: "1px",
              border: "0",
              borderTop: "1px solid rgb(218, 218, 218)",
              margin: "1em 0",
              padding: " 0",
              marginLeft: "6%"
            }}
          />
          <div className="reading-stats">
            <div className="stats-number">
              {this.props.userStats !== undefined ? (
                <h1>{this.props.userStats.allArticlesRead}</h1>
              ) : (
                <span>0</span>
              )}
              <p>Reads</p>
            </div>
            <div className="stats-other"></div>
          </div>
          <br />
          <div className="reading-article">
            <h2 className="stories-label">Stories</h2>
            <div className="active-stories"></div>
            <hr
              style={{
                width: "100%",
                display: "block",
                height: "1px",
                border: "0",
                borderTop: "1px solid rgb(218, 218, 218)",
                margin: "1em 0",
                padding: " 0"
              }}
            />
            {this.props.userStats.articlesRead !== undefined ? (
              this.props.userStats.articlesRead.map(stat => (
                <div className="reading-stories" key={stat.Article.slug}>
                  <h3>{stat.Article.title}</h3>
                  <div className="story-body">
                    <p>{stat.Article.description}</p>
                  </div>
                  <p>
                    <span
                      style={{
                        color: "grey"
                      }}
                    >
                      last Seen :{" "}
                      <TimeAgo date={stat.lastSeen} formatter={formatter} />
                    </span>
                    <span
                      style={{
                        float: "right",
                        marginRight: "50px",
                        color: "grey"
                      }}
                    >
                      Read Times : {stat.TimesArticleRead}
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <h1>No stats</h1>
            )}
          </div>
        </div>
      </>
    );
  }
}
UserStats.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  logOutUser: propTypes.func,
  getStats: propTypes.func,
  userStats: propTypes.object
};
const mapStateToProps = state => ({
  profile: state.profile,
  userStats: state.userStats
});
export default connect(
  mapStateToProps,
  {
    getUserProfile,
    editUserProfile,
    editUserProfilePicture,
    logOutUser,
    getStats
  }
)(UserStats);
