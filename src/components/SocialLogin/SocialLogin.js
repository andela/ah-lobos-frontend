/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import google from "../../assets/images/gmail.png";

const SocialLogin = ({ redirect, path }) => {
  const socialLoginHandle = socialLink => {
    const googleURL = `${process.env.BACK_END_URL}/${socialLink}`;
    window.open(googleURL, "_blank");
  };
  return (
    <>
      <p>or</p>
      <div className="social-icons">
        <img
          src={facebook}
          alt="facebook"
          onClick={() => {
            socialLoginHandle("facebook");
          }}
          id="facebook"
        />
        <img
          src={twitter}
          alt="twitter"
          onClick={() => {
            socialLoginHandle("twitter");
          }}
          id="twitter"
        />
        <img
          src={google}
          alt="google"
          onClick={() => {
            socialLoginHandle("google");
          }}
          id="google"
        />
      </div>
      <div className="sign-up-redirect">
        Already have an account ?{" "}
        <Link to={path} className="redirect-login">
          {redirect}
        </Link>
      </div>
    </>
  );
};

SocialLogin.propTypes = {
  redirect: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default SocialLogin;
