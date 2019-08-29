import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import profile from "../../../assets/images/profile.svg";
import bookmarks from "../../../assets/images/bookmarks.svg";
import signout from "../../../assets/images/sign-out.svg";

const DropDown = ({ signOut }) => (
  <>
    <div id="drop-id" className="drop-down">
      <Link to="/follow" className="profile-menu">
        <img className="profile-menu-iconh" src={profile} alt="profile" />
        <p className="icon-text">Profile</p>
      </Link>
      <Link to="/" className="bookmarks-menu">
        <img className="bookmarks-menu-icon" src={bookmarks} alt="profile" />
        <p className="icon-text">Bookmarks</p>
      </Link>
      <Link to="/" className="sign-out-drop-down" onClick={signOut}>
        <img className="sign-out-drop-down-icon" src={signout} alt="profile" />
        <p className="icon-text">Sign Out</p>
      </Link>
      <p className="divider">-- notifications preference --</p>
      <div className="in-app-notify">
        <span>In app notifications</span>
        <input type="checkbox" name="in-app" />
      </div>
      <div className="email-notify">
        <span>Email notifications</span>
        <input type="checkbox" name="email" />
      </div>
    </div>
  </>
);

DropDown.propTypes = {
  signOut: PropTypes.func
};

export default DropDown;
