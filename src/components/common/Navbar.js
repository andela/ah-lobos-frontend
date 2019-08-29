import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Popup } from "semantic-ui-react";
import Avatar from "../../assets/images/user.png";
import UserProfile from "../profile/UserProfile";

const Navbar = ({ token, profile }) => {
  const { username, image } = profile;
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>
            authors<b>Haven</b>
          </p>
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

              <span id="menu-toggle">
                <i className="fas fa-bars" />
              </span>
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
    </>
  );
};

Navbar.propTypes = {
  token: PropTypes.string,
  profile: PropTypes.object.isRequired
};

export default Navbar;
