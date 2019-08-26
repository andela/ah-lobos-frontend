import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import google from "../../assets/images/gmail.png";

const SocialLogin = ({ redirect }) => (
  <>
    <p>or</p>
    <div className="social-icons">
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
      <img src={google} alt="gmail" />
    </div>
    <div className="sign-up-redirect">
      Already have an account ?{" "}
      <Link to="/login" className="redirect-login">
        {redirect}
      </Link>
    </div>
  </>
);

SocialLogin.propTypes = {
  redirect: PropTypes.string.isRequired
};

export default SocialLogin;
