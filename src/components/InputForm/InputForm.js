import React from "react";
import PropTypes from "prop-types";

const InputForm = ({ name, value, onChange, placeholder }) => (
  <div className="group-form">
    <input
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form-control"
    />
  </div>
);

InputForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default InputForm;
