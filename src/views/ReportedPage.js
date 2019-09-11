/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import jwt from "jsonwebtoken";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { getUserProfile } from "../redux/actions/userActions";
import { getAllReported } from "../redux/actions/adminActions";
import { deleteArticle } from "../redux/actions/articleActions";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";
class ReportedPage extends Component {
  async componentDidMount() {
    await this.props.getUserProfile(username);
    await this.props.getAllReported();
  }

  onDelete(slug) {
    this.props.deleteArticle(slug);
    setTimeout(() => this.props.getAllReported(), 500);
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
            <div className="admin-table admin-report">
              <div className="table-title">
                <h2>Reported articles</h2>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Reporter</th>
                    <th>message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.admin.data
                    ? this.props.admin.data.map(report => (
                        <tr key={report.id}>
                          <td>{(i += 1)}</td>
                          <td>{report.Article.title}</td>
                          <td>{report.User.username}</td>
                          <td>{report.message}</td>
                          <td>
                            <button
                              onClick={() => this.onDelete(report.Article.slug)}
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

ReportedPage.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getAllReported: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    admin: state.admin.allReport
  };
};

const mapDispatchToProps = {
  getUserProfile,
  getAllReported,
  deleteArticle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportedPage);
