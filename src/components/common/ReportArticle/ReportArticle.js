/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import dots from "../../../assets/images/dots.svg";
import { reportArticle } from "../../../redux/actions/reportActions";
import {
  getAllReported,
  getAllUsers
} from "../../../redux/actions/adminActions";

class ReportArticle extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      open: false,
      reportMessage: "",
      other: false
    };
    this.showMenu = this.showMenu.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    const { slug } = this.props;
    this.props.reportArticle(slug, { message: this.state.reportMessage });
    this.setState({ open: false });
    this.props.getAllReported();
    this.props.getAllUsers();
  };

  onRadioChange = e => {
    const reportMessage = e.target.value;
    if (reportMessage === "Others") {
      this.setState({ other: true });
    } else {
      this.setState({ other: false });
    }
    this.setState({ reportMessage });
  };

  onInputChange = e => {
    const { name, value } = e.target;
    console.log(name);
    this.setState({ ...this.state, reportMessage: value });
  };

  showMenu(event) {
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu,
      open: true
    });
  }

  render() {
    return (
      <div>
        <button className="report-button-image" onClick={this.showMenu}>
          <img src={dots} alt="dots" />
        </button>
        <Modal
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          center
          focusTrapped
        >
          <form className="report-form">
            <div className="report-title">
              <span>Report Article</span>
            </div>
            <div className="radio-contain">
              <label className="container-radio">
                Spam
                <input
                  type="radio"
                  value="Spam"
                  checked={this.state.reportMessage === "Spam"}
                  name="radio"
                  onChange={this.onRadioChange}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container-radio">
                Harassment
                <input
                  type="radio"
                  name="radio"
                  checked={this.state.reportMessage === "Harassment"}
                  onChange={this.onRadioChange}
                  value="Harassment"
                />
                <span className="checkmark"></span>
              </label>
              <label className="container-radio">
                Rules violation
                <input
                  type="radio"
                  name="radio"
                  checked={this.state.reportMessage === "Rules violation"}
                  onChange={this.onRadioChange}
                  value="Rules violation"
                />
                <span className="checkmark"></span>
              </label>
              <label className="container-radio">
                Others
                <input
                  type="radio"
                  name="radio"
                  checked={this.state.reportMessage === "Others"}
                  onChange={this.onRadioChange}
                  value="Others"
                />
                <span className="checkmark"></span>
              </label>
              {this.state.other ? (
                <input
                  type="text"
                  name="others"
                  placeholder="Report message"
                  className="report-text"
                  value={this.state.reportMessage}
                  onChange={this.onInputChange}
                />
              ) : null}
            </div>
            <div>
              <button className="report-button-send" onClick={this.onSubmit}>
                Report
              </button>
              <button
                className="report-button-cancel"
                onClick={() => this.setState({ open: false })}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

ReportArticle.propTypes = {
  slug: PropTypes.string,
  reportArticle: PropTypes.func.isRequired,
  getAllReported: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  report: state.report
});

const mapDispatchToProps = {
  reportArticle,
  getAllReported,
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportArticle);
