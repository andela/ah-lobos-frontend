import React from "react";
import { Button, Input } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "../../assets/images/user.png";

const handleEditUserProfile = () => {
  window.location.href = "/edit";
};
const Profife = props => {
  const { profile } = props;
  return (
    <>
      <div className="popup-user-profile">
        <div className="profile-avatar">
          <img src={profile.image || Avatar} alt="" />
        </div>
        <div className="user-stats">
          <span>
            <i className="far fa-users" /> 22200 Followers
          </span>
          <Link to="/follow">
            <span>
              <i className="fas fa-user-friends" /> {profile.following}{" "}
              Following
            </span>
          </Link>
        </div>
        <div className="profile-details">
          <Input
            defaultValue={`${profile.firstName} ${profile.lastName}`}
            disabled
          />
          <Input defaultValue={profile.email} disabled />
          <Input defaultValue={profile.username} disabled />
        </div>
        <div className="view-all-users">
          <Button onClick={handleEditUserProfile} className="btn-link">
            Edit profile info <i className="fas fa-user-edit" />
          </Button>
        </div>
      </div>
    </>
  );
};

Profife.propTypes = {
  profile: PropTypes.object.isRequired
};
export default Profife;
