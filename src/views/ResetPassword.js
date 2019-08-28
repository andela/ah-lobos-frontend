/* eslint-disable consistent-return */
import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { setEmail } from "../redux/actions/resetAction";
import NavBar from "../components/common/NavBarReset";

export class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nexProps) {
    if (nexProps.email.error) {
      return toast.warn(nexProps.email.error);
    }
    if (nexProps.email.message) {
      this.setState({ email: "" });
      return toast.warn(nexProps.email.message);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    this.props.setEmail({ email });
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="mother">
          <div className="password-container">
            <Form className="reset" onSubmit={this.onSubmit}>
              <div>
                <h1>Find your authorsHaven account</h1>
              </div>
              <p>Enter your email </p>
              <input
                type="email"
                name="email"
                className="thisButton"
                onChange={this.onChange}
                value={this.state.email}
              />
              <br />
              <button
                type="submit"
                className="resetButton"
                disabled={!this.state.email}
              >
                Search
              </button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

Reset.propTypes = {
  setEmail: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  email: state.emailData.email
});

export default connect(
  mapStateToProps,
  { setEmail }
)(Reset);
