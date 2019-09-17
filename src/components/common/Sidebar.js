/* eslint-disable max-len */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import user from "../../assets/images/user.png";
import dashboard from "../../assets/images/dashboard.svg";
import reported from "../../assets/images/reported.svg";

const Sidebar = ({ profile }) => (
  <div className="admin-side">
    <div className="admin-profile-side">
      <img src={profile.image || user} alt="admin" className="admin-profile" />
      <span className="admin-name">Admin</span>
    </div>
    <div className="admin-links-side">
      <div className="admin-link">
        <Link className="admin-links" to="/admin">
          <img src={dashboard} className="side-icon" alt="dashboard" />
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="admin-link link-back">
        <Link className="admin-links" to="/reported">
          <img src={reported} className="side-icon icon-left" alt="dashboard" />
          <span>Reported</span>
        </Link>
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Sidebar;
