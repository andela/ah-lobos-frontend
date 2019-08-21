/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import { setNewPassword } from "../redux/actions/resetAction";
import NavBar from "../components/common/NavBarReset";

export class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nexProps) {
    if (nexProps.passwords.errors) {
      return toast.warn(nexProps.passwords.errors);
    }
    if (nexProps.passwords.error) {
      return toast.warn(nexProps.passwords.error);
    }
    if (nexProps.passwords.message) {
      this.setState({ password: "", confirmPassword: "" });
      return toast.warn(nexProps.passwords.message);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const passwords = {
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.setNewPassword(this.props.match.params.token, passwords);
  }

  tooglePasswordVisibilty = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  tooglePasswordVisibiltyConfirm = () => {
    const { showConfirmPassword } = this.state;
    this.setState({ showConfirmPassword: !showConfirmPassword });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="mother">
          <div className="password-container">
            <Form className="reset" onSubmit={this.onSubmit}>
              <div>
                <h1>Set a new Password</h1>
              </div>
              <div>
                <i
                  className="fa fa-eye"
                  id="eyePassword"
                  onClick={this.tooglePasswordVisibilty}
                />
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password..."
                  className="thisPassword"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
              <div className="confirm">
                <i
                  className="fa fa-eye"
                  id="eyeConfirmPassword"
                  onClick={this.tooglePasswordVisibiltyConfirm}
                />
                <input
                  type={this.state.showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password..."
                  name="confirmPassword"
                  className="thisConfirmPassword"
                  onChange={this.onChange}
                  value={this.state.confirmPassword}
                />
              </div>
              <br />
              <button
                type="submit"
                className="resetButton"
                disabled={!this.state.password || !this.state.confirmPassword}
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

NewPassword.propTypes = {
  setNewPassword: propTypes.func.isRequired,
  match: propTypes.object.isRequired
};
const mapStateToProps = state => ({
  passwords: state.emailData.passwords
});

export default connect(
  mapStateToProps,
  { setNewPassword }
)(NewPassword);
