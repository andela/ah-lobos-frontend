import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import copyright from "../../../assets/images/copyright.svg";
import adminIcon from "../../../assets/images/admin.svg";

const Footer = ({ admin, articlesLen }) => (
  <>
    {articlesLen === 0 ? null : (
      <div className="footer-side">
        <div className="admin-side-footer">
          {admin === "admin" ? (
            <Link to="/admin">
              <img src={adminIcon} alt="admin" />
            </Link>
          ) : null}
        </div>
        <div className="footer-middle">
          <div className="year">2019</div>
          <div>
            <img src={copyright} className="copyright" alt="" />
            <div className="lobos-logo-footer">
              Lobos-Devs{" "}
              <span className="all-right">| All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

Footer.propTypes = {
  admin: PropTypes.string.isRequired,
  articlesLen: PropTypes.number
};

export default Footer;
