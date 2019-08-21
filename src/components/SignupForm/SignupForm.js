import React from "react";
import PropTypes from "prop-types";
import ButtonForm from "../ButtonForm/ButtonForm";
import InputForm from "../InputForm/InputForm";
import PasswordForm from "../PasswordForm/PasswordForm";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignupForm = ({
  user,
  onChange,
  onSave,
  registering,
  enabled,
  submitted,
  toggleShow,
  hidden
}) => {
  return (
    <div className="left">
      <form onSubmit={onSave}>
        <h1>Get Started</h1>
        <InputForm
          name="email"
          value={user.email}
          onChange={onChange}
          placeholder="Email..."
        />
        <InputForm
          name="username"
          value={user.username}
          onChange={onChange}
          placeholder="Username..."
        />
        <PasswordForm
          name="password"
          value={user.password}
          onChange={onChange}
          placeholder="Password..."
          hidden={hidden}
          toggleShow={toggleShow}
        />
        <ButtonForm
          name="Create account"
          send="Creating account..."
          registering={registering}
          enabled={enabled}
          submitted={submitted}
        />
      </form>
      <p>or</p>
      <SocialLogin path="/login" redirect="Login" />
    </div>
  );
};

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  registering: PropTypes.object.isRequired,
  enabled: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired
};

export default SignupForm;
