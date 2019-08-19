import React, { Component } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "@babel/polyfill";
import SignupLeftSide from "../components/SignupLeftSide/SignupLeftSide";
import SignupForm from "../components/SignupForm/SignupForm";
import { register } from "../redux/actions/authActions";
import {
  isEmail,
  isValidUsername,
  isValidPassword
} from "../helpers/validations/signup";

export class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        username: "",
        password: ""
      },
      submitted: false,
      hidden: true
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, username, password } = this.state.user;
    if (!isEmail(email)) {
      toast.warn("Email must be a valid email (example@server.com)...");
    } else if (!isValidUsername(username)) {
      toast.warn("Username must be characters only like (John)...");
    } else if (!isValidPassword(password)) {
      toast.warn(
        `Password must contain uppercase,
                lowercase and numbers...`
      );
    } else {
      this.props.register({
        email,
        username,
        password
      });
      setTimeout(() => {
        this.setState({ submitted: false });
      }, 5000);
    }
  };

  render() {
    const { user, submitted, hidden } = this.state;
    const { registering } = this.props;
    const enabled =
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0;
    return (
      <div className="wrapper">
        <SignupLeftSide />
        <SignupForm
          hidden={hidden}
          toggleShow={() => this.setState({ hidden: !this.state.hidden })}
          submitted={submitted}
          enabled={enabled}
          registering={registering}
          user={user}
          onChange={this.handleChange}
          onSave={this.handleSubmit}
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  registering: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  registering: state.auth
});

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
