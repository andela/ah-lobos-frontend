/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import Navbar from "../components/common/Navbar";
import Pagination from "../components/Pagination/Pagination";
import Categories from "../components/common/Categories/Categories";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture,
  logOutUser
} from "../redux/actions/userActions";
import { getArticles } from "../redux/actions/articlesAction";
import Articles from "../components/articles/Articles";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

export function HomePage({
  getUserProfile,
  getArticles,
  logOutUser,
  profile,
  articles
}) {
  const [allArticles, setallArticles] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [articlePerPage] = useState(3);

  useEffect(() => {
    async function getResources() {
      await getUserProfile(username);
      await getArticles();
    }
    getResources();
    if (articles.articles !== undefined) setallArticles(articles.articles);
  }, [articles.articles]);

  async function signOut() {
    await logOutUser(token);
  }

  const indexOfLastArticle = currentPage * articlePerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
  const currentArticles = allArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  function next() {
    setcurrentPage(currentPage + 1);
  }

  function previous() {
    setcurrentPage(currentPage - 1);
  }

  const paginate = pageNumber => setcurrentPage(pageNumber);

  return (
    <>
      <Navbar profile={profile} token={token} signOut={signOut} />
      <Categories />
      <Articles list={currentArticles} />
      <Pagination
        articlesPerPage={articlePerPage}
        totalArticles={allArticles.length}
        paginate={paginate}
        next={next}
        previous={previous}
        currentPage={currentPage}
      />
    </>
  );
}
HomePage.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  logOutUser: propTypes.func,
  getArticles: propTypes.func.isRequired,
  articles: propTypes.object
};
const mapStateToProps = state => ({
  profile: state.profile,
  articles: state.articles
});
export default connect(
  mapStateToProps,
  {
    getUserProfile,
    editUserProfile,
    editUserProfilePicture,
    getArticles,
    logOutUser
  }
)(HomePage);
