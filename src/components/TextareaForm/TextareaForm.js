import React from "react";
import PropTypes from "prop-types";

const TextareaForm = ({ rows, placeholder, className }) => (
  <div className="">
    <textarea placeholder={placeholder} rows={rows} className={className} />
  </div>
);

TextareaForm.propTypes = {
  rows: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default TextareaForm;
