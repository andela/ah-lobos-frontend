import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import profile from "../../../assets/images/profile.svg";
import myarticles from "../../../assets/images/my-articles.svg";
import newarticle from "../../../assets/images/new-article.svg";
import draft from "../../../assets/images/draft.svg";
import bookmarks from "../../../assets/images/bookmarks.svg";
import signout from "../../../assets/images/sign-out.svg";
import NotifConfig from "../NotifConfig/NotifConfig";

const DropDown = ({ signOut, onChange, inApp, email }) => (
  <>
    <div id="drop-id" className="drop-down">
      <Link to="/follow" className="profile-menu">
        <img className="profile-menu-icon" src={profile} alt="profile" />
        <p className="icon-text">Profile</p>
      </Link>
      <Link to="/article/new" className="profile-menu">
        <img className="profile-menu-icon" src={newarticle} alt="newarticle" />
        <p className="icon-text">New article</p>
      </Link>
      <Link to="/article/user" className="profile-menu">
        <img className="profile-menu-icon" src={myarticles} alt="myarticles" />
        <p className="icon-text">My articles</p>
      </Link>
      <Link to="/article/user/draft" className="profile-menu">
        <img className="profile-menu-icon" src={draft} alt="draft" />
        <p className="icon-text">My Draft</p>
      </Link>
      <Link to="/article/bookmark" className="bookmarks-menu">
        <img className="bookmarks-menu-icon" src={bookmarks} alt="profile" />
        <p className="icon-text">Bookmarks</p>
      </Link>
      <Link to="/users/readingstats" className="bookmarks-menu">
        <i className="fas fa-chart-bar"></i>
        <p className="icon-text">Stats</p>
      </Link>
      <Link to="/" className="sign-out-drop-down" onClick={signOut}>
        <img className="sign-out-drop-down-icon" src={signout} alt="profile" />
        <p className="icon-text">Sign Out</p>
      </Link>
      <NotifConfig onChange={onChange} inApp={inApp} email={email} />
    </div>
  </>
);

DropDown.propTypes = {
  signOut: PropTypes.func,
  onChange: PropTypes.func,
  inApp: PropTypes.bool,
  email: PropTypes.bool
};

export default DropDown;
