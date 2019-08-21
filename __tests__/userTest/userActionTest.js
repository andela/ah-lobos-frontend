import {
  getUserProfile,
  editUserProfile,
  editUserProfilePicture
} from "../../src/redux/actions/userActions";

describe("User profile tests", () => {
  const dispatch = jest.fn(action => action);
  it("should get user profile", () => {
    getUserProfile("Admin")(dispatch);
  });
  it("should edit user profile info", () => {
    editUserProfile({
      firstName: "John",
      lastName: "Lee"
    })(dispatch);
  });
  it("should change user profile picture", () => {
    editUserProfilePicture()(dispatch);
  });
});
