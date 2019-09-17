/* eslint-disable no-return-assign */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import jwt from "jsonwebtoken";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import Card from "../components/common/Card/Card";
import { getUserProfile } from "../redux/actions/userActions";
import { getAllUsers, deleteUser } from "../redux/actions/adminActions";
import notifications from "../assets/images/notifications.svg";
import users from "../assets/images/users.svg";
import reported from "../assets/images/reported.svg";
import articleIcon from "../assets/images/articlesIcon.svg";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";
class AdminPage extends Component {
  async componentDidMount() {
    await this.props.getUserProfile(username);
    await this.props.getAllUsers();
  }

  onDelete(id) {
    this.props.deleteUser(id);
    setTimeout(() => this.props.getAllUsers(), 500);
  }

  render() {
    let i = 0;
    return (
      <>
        <Navbar
          profile={this.props.profile}
          token={token}
          signOut={this.signOut}
        />
        <div className="admin-page">
          <Sidebar profile={this.props.profile} />
          <div className="admin-main">
            {this.props.admin.allUsers.length !== 0 ? (
              <>
                <Card
                  cardType="Users"
                  cardNumber={`${this.props.admin.allUsers.usersCount}`}
                  cardIcon={users}
                  cardColor="#D58E8E"
                />
                <Card
                  cardType="Reported"
                  cardNumber={`${this.props.admin.allUsers.reportCount}`}
                  cardIcon={reported}
                  cardColor="#3FAABE"
                />
                <Card
                  cardType="Notifications"
                  cardNumber={`${this.props.admin.allUsers.notifyCount}`}
                  cardIcon={notifications}
                  cardColor="#527667"
                />
                <Card
                  cardType="Articles"
                  cardNumber={`${this.props.admin.allUsers.articleCount}`}
                  cardIcon={articleIcon}
                  cardColor="#959386"
                />
              </>
            ) : null}
            <div className="admin-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Names</th>
                    <th>Usernames</th>
                    <th>Email</th>
                    <th>Verified</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.admin.allUsers.users
                    ? this.props.admin.allUsers.users.map(user => (
                        <tr key={user.id}>
                          <td>{(i += 1)}</td>
                          <td>
                            {user.firstname === null && user.lastname === null
                              ? `${user.firstname} ${user.lastname}`
                              : `No names`}
                          </td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{`${user.isVerified}`}</td>
                          <td>{user.role}</td>
                          <td>
                            <button
                              onClick={() => this.onDelete(user.id)}
                              style={{ backgroundColor: "white" }}
                            >
                              <i
                                className="fa fa-trash"
                                style={{ color: "red" }}
                              />
                            </button>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

AdminPage.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    admin: state.admin
  };
};

const mapDispatchToProps = {
  getUserProfile,
  getAllUsers,
  deleteUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
