import React from "react";
import { Label, Form } from "semantic-ui-react";
import ReactFileReader from "react-file-reader";
import propTypes from "prop-types";
import Avatar from "../../assets/images/user.png";

const EditProfifeForm = ({
  profile,
  onChange,
  onSubmit,
  handleImageUpload
}) => {
  return (
    <div id="edit-user-modal">
      <div id="modal-edit-user">
        <div className="img-edit">
          <img
            className="profile-avatar-edit"
            src={profile.image || Avatar}
            alt=""
          />
          <ReactFileReader handleFiles={handleImageUpload}>
            <span id="btn-change-pic">
              Change profile picture <i className="fas fa-user-edit" />
            </span>
          </ReactFileReader>
        </div>
        <div className="profile-details-edit">
          <h3>Person information</h3>
          <Form className="edit" onSubmit={onSubmit}>
            <div className="form-group">
              <Label className="lb-default">Firstname:</Label>
              <input
                className="inp-txt"
                name="firstName"
                onChange={onChange}
                defaultValue={profile.firstName}
              />
            </div>
            <div className="form-group">
              <Label className="lb-default">Last name:</Label>
              <input
                className="inp-txt"
                name="lastName"
                defaultValue={profile.lastName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Label className="lb-default">E-mail:</Label>
              <input
                className="inp-txt"
                name="email"
                defaultValue={profile.email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Label className="lb-default">Username:</Label>
              <input
                className="inp-txt disable-inp"
                name="username"
                defaultValue={profile.username}
                onChange={onChange}
                disabled
              />
            </div>
            <div className="form-group">
              <Label className="lb-default">Bio:</Label>
              <br />
              <Label className="lb-default"> </Label>
              <textarea
                rows="10"
                name="bio"
                value={profile.bio || ""}
                className="inp-txt-area"
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn-default">
              Save
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

EditProfifeForm.propTypes = {
  profile: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  handleImageUpload: propTypes.func.isRequired
};

export default EditProfifeForm;
