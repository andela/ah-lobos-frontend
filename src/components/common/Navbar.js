import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Popup } from "semantic-ui-react";
import Avatar from "../../assets/images/user.png";
import UserProfile from "../profile/UserProfile";
import DropDown from "./DropDown/DropDown";

const Navbar = ({ token, profile, signOut }) => {
  const { username, image } = profile;

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            authors<b>Haven</b>
          </Link>
        </div>
        <div className="links">
          {token !== null ? (
            <div className="top-menu">
              <i id="btn-notification" className="fas fa-bell" />
              <Popup
                trigger={
                  <div id="top-menu-avatar">
                    <img className="user-avatar" src={image || Avatar} alt="" />
                    <div className="user-name">{username}</div>
                  </div>
                }
                position="bottom center"
                on="click"
              >
                <Popup.Content>
                  <UserProfile profile={profile} />
                </Popup.Content>
              </Popup>

              <div id="menu-toggle" className="icon">
                <div className="humburger"></div>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/signup" className="signup">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
      <DropDown signOut={signOut} />
    </>
  );
};

Navbar.propTypes = {
  token: PropTypes.string,
  profile: PropTypes.object.isRequired,
  signOut: PropTypes.func
};

export default Navbar;
