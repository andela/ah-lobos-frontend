import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import PropTypes from "prop-types";
import Avatar from "../../assets/images/user.png";
import DropDown from "./DropDown/DropDown";
import { SearchItems } from "./Search/Search";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture,
  logOutUser
} from "../../redux/actions/userActions";
import {
  getNotifConfig,
  updateNotifConfig
} from "../../redux/actions/notifConfigActions";
import Bell from "../notification/Bell";
import {
  getUserNotification,
  readNotification
} from "../../redux/actions/userNotificationActions";
import { searchMethod } from "../../redux/actions/SearchAction";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inApp: false,
      email: false,
      notification: ""
    };
  }

  async componentDidMount() {
    await this.props.getUserNotification();
    await this.props.getUserProfile(username);
    if (token) {
      await this.props.getNotifConfig(token);
      this.setState({
        inApp: this.props.notifConfig.inApp,
        email: this.props.notifConfig.email
      });
    }
  }

  componentWillReceiveProps() {
    if (
      this.props.notification !== undefined &&
      this.props.notification.length > 0
    ) {
      const msg = this.props.notification.filter(
        type => type.status === "unseen"
      );
      this.setState({ notification: msg });
    }
  }

  onClick = () => {
    document.getElementById("menu-toggle").classList.toggle("active");
    document.getElementById("drop-id").classList.toggle("grid");
  };

  signOut = async () => {
    await this.props.logOutUser(token);
  };

  handleChange = async event => {
    const { name, checked } = event.target;
    if (name === "inApp") {
      this.setState({ inApp: checked });
      const notifConfig = {
        inApp: checked,
        email: this.state.email
      };
      await this.props.updateNotifConfig(token, notifConfig);
    } else if (name === "email") {
      this.setState({ email: checked });
      const notifConfig = {
        inApp: this.state.inApp,
        email: checked
      };
      await this.props.updateNotifConfig(token, notifConfig);
    }
  };

  readUserNotification = async id => {
    await this.props.readNotification(id);
    await this.props.getUserNotification();
  };

  render() {
    return (
      <>
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              authors<b>Haven</b>
            </Link>
          </div>
          <SearchItems
            all={this.props.all}
            searchMethod={this.props.searchMethod}
          />
          <div className="links">
            {token !== null ? (
              <div className="top-menu">
                {this.state.notification !== undefined ? (
                  <Bell
                    totalNotification={this.state.notification.length}
                    notification={this.state.notification}
                    readUserNotification={this.readUserNotification}
                  />
                ) : (
                  <Bell />
                )}
                <div id="top-menu-avatar">
                  <img
                    className="user-avatar"
                    src={this.props.profile.image || Avatar}
                    alt=""
                  />
                  <div className="user-name">{this.props.profile.username}</div>
                </div>
                <button
                  onClick={this.onClick}
                  id="menu-toggle"
                  className="icon"
                >
                  <div className="humburger"></div>
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="login">
                  Login
                </Link>
                <Link to="/signup" className="signup">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
        <DropDown
          signOut={this.signOut}
          onChange={this.handleChange}
          inApp={this.state.inApp}
          email={this.state.email}
        />
      </>
    );
  }
}

Navbar.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  logOutUser: PropTypes.func,
  getNotifConfig: PropTypes.func,
  notifConfig: PropTypes.object,
  updateNotifConfig: PropTypes.func,
  inApp: PropTypes.bool,
  email: PropTypes.bool,
  readNotification: PropTypes.func,
  getUserNotification: PropTypes.func,
  notification: PropTypes.any,
  all: PropTypes.any,
  searchMethod: PropTypes.func
};

const mapStateToProps = state => ({
  profile: state.profile,
  notifConfig: state.notifConfig.notifConfig,
  notification: state.notifications.notification
});

export default connect(
  mapStateToProps,
  {
    getUserProfile,
    editUserProfile,
    editUserProfilePicture,
    logOutUser,
    getNotifConfig,
    updateNotifConfig,
    getUserNotification,
    readNotification,
    searchMethod
  }
)(Navbar);
