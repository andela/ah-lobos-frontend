import React from "react";
import PropTypes from "prop-types";
import "semantic-ui-react";
import show from "../../assets/images/show.png";
import hide from "../../assets/images/hide.png";

const PasswordForm = ({
  name,
  value,
  placeholder,
  onChange,
  hidden,
  toggleShow
}) => (
  <div className="group-form">
    <input
      name={name}
      type={hidden ? "password" : "text"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form-control"
    />
    <a href="#/" className="show-toggle" onClick={toggleShow}>
      {hidden ? (
        <img src={show} alt="show" className="eye-toggle" />
      ) : (
        <img src={hide} alt="hide" className="eye-toggle" />
      )}
    </a>
  </div>
);

PasswordForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired
};

export default PasswordForm;
