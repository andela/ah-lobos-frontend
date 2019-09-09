import React from "react";
import PropTypes from "prop-types";

const InputForm = ({ name, value, onChange, placeholder, classname }) => (
  <div className="group-form">
    <input
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classname}
    />
  </div>
);

InputForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired
};

export default InputForm;
