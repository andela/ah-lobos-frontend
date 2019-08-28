import React, { useEffect } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import PropTypes from "prop-types";
import socialLoginAction from "../redux/actions/socialLoginAction";

const SocialLogin = ({ location, socialLogin }) => {
  useEffect(() => {
    const { token } = queryString.parse(location.search);
    if (token) {
      socialLogin({ token, email: "" });
      window.location = "/";
    }
  }, [socialLogin]);
  return (
    <>
      <p>Redirecting...</p>
    </>
  );
};

SocialLogin.propTypes = {
  location: PropTypes.object.isRequired,
  socialLogin: PropTypes.func.isRequired
};

const mapStateToProps = ({ articles, user }) => ({ articles, user });

const mapDispatchToProps = dispatch => ({
  socialLogin: payload => dispatch(socialLoginAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialLogin);
