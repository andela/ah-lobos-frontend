import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import profile from "../../assets/images/user.png";

const Navbar = ({ token, decodeToken }) => (
  <>
    <div className="navbar">
      <div className="logo">
        <p>
          authors<b>Haven</b>
        </p>
      </div>
      <div className="links">
        {token != null && decodeToken.id ? (
          <>
            <img
              src={profile}
              alt="profile"
              style={{ height: 40, marginTop: "10px" }}
            />
            <h4 style={{ marginLeft: "-10px" }}>
              {decodeToken.username.charAt(0).toUpperCase() +
                decodeToken.username.slice(1)}
            </h4>
          </>
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

Navbar.propTypes = {
  token: PropTypes.string.isRequired,
  decodeToken: PropTypes.object.isRequired
};

export default Navbar;
