import React from "react";
import PropTypes from "prop-types";

const ButtonForm = ({ name, enabled, submitted }) =>
  enabled ? (
    <>
      <button type="submit" className="btn-signup">
        {submitted ? "Creating account...." : name}
      </button>
    </>
  ) : (
    <>
      <button type="submit" className="btn-signup" disabled>
        {name}
      </button>
    </>
  );

ButtonForm.propTypes = {
  name: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired
};

export default ButtonForm;
