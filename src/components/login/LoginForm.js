import React from "react";
import PropTypes from "prop-types";
import SignupLeftSide from "../SignupLeftSide/SignupLeftSide";
import TextInput from "../common/TextInput";
import ButtonForm from "../ButtonForm/ButtonForm";
import SocialLogin from "../SocialLogin/SocialLogin";
import show from "../../assets/images/show.png";
import hide from "../../assets/images/hide.png";

const LoginForm = ({
  email,
  password,
  handleChange,
  handleSubmit,
  submitted,
  toggleShow,
  hidden,
  enabled
}) => {
  return (
    <div className="wrapper">
      <SignupLeftSide />
      <div className="left">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>
          <TextInput
            type="text"
            name="email"
            value={email}
            placeholder="Email..."
            onChange={handleChange}
          />
          <TextInput
            type={hidden ? "password" : "text"}
            name="password"
            value={password}
            placeholder="Password..."
            onChange={handleChange}
            hidden={hidden}
            toggleShow={toggleShow}
          />
          <a href="#/" className="show-toggle" onClick={toggleShow}>
            {hidden ? (
              <img src={show} alt="show" className="eye-toggle-login" />
            ) : (
              <img src={hide} alt="hide" className="eye-toggle-login" />
            )}
          </a>
          <ButtonForm
            className="login-btn"
            name="Login"
            send="Logging in..."
            id="button"
            type="submit"
            enabled={enabled}
            submitted={submitted}
          />
        </form>
        <a href="/resetpassword" className="forgotLink">
          Forgot Password?
        </a>
        <SocialLogin path="/signup" redirect="Sign-up" />
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired
};

export default LoginForm;
