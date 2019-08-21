/* eslint-disable camelcase */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import Navbar from "../components/common/Navbar";
import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture
} from "../redux/actions/userActions";
import EditProfileForm from "../components/profile/EditProfileForm";

const token = sessionStorage.getItem("token");
const username = sessionStorage.getItem("username");
export class ProfileEdit extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    bio: "",
    favorites: "",
    following: "",
    image: "",
    idDisabled: true,
    success: "",
    failure: ""
  };

  onChange = this.onChange.bind(this);

  onSubmit = this.onSubmit.bind(this);

  async componentDidMount() {
    await this.props.getUserProfile(username);
    if (!token) {
      // eslint-disable-next-line no-restricted-globals
      location.href = "/";
    }
  }

  componentWillReceiveProps(nextProps) {
    const { profile } = nextProps;
    this.setState({
      firstName: profile.firstName,
      lastName: profile.lastName,
      username: profile.username,
      email: profile.email,
      bio: profile.bio,
      image: profile.image,
      success: profile.success,
      failure: profile.failure
    });
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value, isDisabled: false });
  }

  async onSubmit(e) {
    e.preventDefault();
    const user = {
      usr: { ...this.state },
      username
    };
    await this.props.editUserProfile(user);
    if (this.props.profile.failure) {
      toast.warn(this.state.failure, {
        hideProgressBar: true
      });
      return 1;
    }
    toast.success(this.state.success, {
      hideProgressBar: true
    });
    return 1;
  }

  handleImageUpload = async files => {
    const data = files[0];
    const user = {
      usr: data,
      username
    };

    await this.props.editUserProfilePicture(user);
    if (this.props.profile.success) {
      toast.success(this.props.profile.success);
      return 0;
    }
    toast.warn(this.props.profile.failure);
    return 0;
  };

  render() {
    return (
      <>
        <Navbar profile={this.props.profile} token={token} />
        <EditProfileForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          handleImageUpload={this.handleImageUpload}
          profile={this.state}
          isDisabled={this.state.idDisabled}
        />
      </>
    );
  }
}
ProfileEdit.propTypes = {
  getUserProfile: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
  editUserProfilePicture: propTypes.func.isRequired,
  editUserProfile: propTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getUserProfile, editUserProfile, editUserProfilePicture }
)(ProfileEdit);
