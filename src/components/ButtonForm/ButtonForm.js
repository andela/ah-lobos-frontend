import React from "react";
import PropTypes from "prop-types";

const ButtonForm = ({ name, send, enabled, submitted }) =>
  enabled ? (
    <>
      <button type="submit" className="btn-signup">
        {submitted ? send : name}
      </button>
    </>
  ) : (
    <>
      <button type="submit" className="btn-signup-disable" disabled>
        {name}
      </button>
    </>
  );

ButtonForm.propTypes = {
  name: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  send: PropTypes.string.isRequired
};

export default ButtonForm;
