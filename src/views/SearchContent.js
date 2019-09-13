/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import articleImage from "../assets/images/article.png";
import Navbar from "../components/common/Navbar";
import { getItemDataFromDatabase } from "../helpers/ItemFromEditor/getItemFromEditor";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture,
  logOutUser
} from "../redux/actions/userActions";
import { searchMethod } from "../redux/actions/searchAction";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

export class SearchContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          search={this.props}
          searchData={this.props.searchData}
        />
        <div className="search-result">
          <p>SEARCH RESULT </p>
        </div>
        <div className="articles-container">
          {this.props.searchData !== undefined &&
            typeof this.props.searchData !== "string" &&
            this.props.searchData.map(filterData => {
              const data = getItemDataFromDatabase(filterData);
              return (
                <div className="user-articles" key={filterData.id}>
                  <div className="article-side">
                    <Link
                      to={`/articles/${filterData.slug}`}
                      className="author-article-title"
                    >
                      <h1 className=".article-side-title">
                        {filterData.title}
                      </h1>
                    </Link>
                    <p className="article-side-desc">
                      {`${filterData.description.substr(0, 220)}...`}
                    </p>
                    <p className="article-side-footer">
                      - {filterData.author.username}
                    </p>
                  </div>
                  <div className="article-image">
                    <img
                      src={data.image || articleImage}
                      alt=""
                      style={{
                        height: "200px",
                        width: "80%",
                        float: "right",
                        objectFit: "fill"
                      }}
                    />
                  </div>
                </div>
              );
            })}{" "}
          {typeof this.props.searchData === "string" ? (
            <div className="searchNotFound">
              Sorry, but nothing matched your search terms. Please try again
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  searchData: state.searchData.searchMaterial,
  profile: state.profile
});
SearchContent.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  logOutUser: propTypes.func,
  searchData: propTypes.array
};
export default connect(
  mapStateToProps,
  {
    getUserProfile,
    editUserProfile,
    editUserProfilePicture,
    logOutUser,
    searchMethod
  }
)(SearchContent);
