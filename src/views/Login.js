import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { loginUser } from "../redux/actions/userActions";
import LoginForm from "../components/login/LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      submitted: false,
      hidden: true
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  formIsValid = () => {
    const { email, password } = this.state;
    const errors = {};
    if (email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return toast.warn("Email must be valid (example@server.com)");
      }
    }
    if (password) {
      if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
        return toast.warn(
          "Password must have a minimum 6 alphabets and a number"
        );
      }
    }

    this.setState(errors);
    return Object.keys(errors).length === 0;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    if (!this.formIsValid()) return;
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
    setTimeout(() => {
      this.setState({ submitted: false });
    }, 5000);
  };

  redirectOnsuccess = () => {
    const { isloggedin } = this.props;
    if (isloggedin) {
      window.location = "/";
    }
  };

  render() {
    this.redirectOnsuccess();
    const { email, password, submitted, hidden } = this.state;
    const enabled = email.length > 0 && password.length > 0;
    return (
      <>
        <LoginForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          toggleShow={() => this.setState({ hidden: !this.state.hidden })}
          submitted={submitted}
          hidden={hidden}
          email={this.state.email}
          password={this.state.password}
          isloggedin={this.props.isloggedin}
          errors={this.state.errors}
          enabled={enabled}
        />
      </>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func,
  isloggedin: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isloggedin: state.user.isloggedin
  };
}

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
