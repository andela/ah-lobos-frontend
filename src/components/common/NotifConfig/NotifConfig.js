/* eslint-disable react/no-string-refs */
import React from "react";
import PropTypes from "prop-types";

const NotifConfig = ({ onChange, inApp, email }) => (
  <>
    <p className="divider">-- notifications preference --</p>
    <div className="in-app-notify">
      <span>In app notifications</span>
      <input type="checkbox" name="inApp" checked={inApp} onChange={onChange} />
    </div>
    <div className="email-notify">
      <span>Email notifications</span>
      <input type="checkbox" name="email" checked={email} onChange={onChange} />
    </div>
  </>
);

NotifConfig.propTypes = {
  onChange: PropTypes.func,
  inApp: PropTypes.bool,
  email: PropTypes.bool
};

export default NotifConfig;
