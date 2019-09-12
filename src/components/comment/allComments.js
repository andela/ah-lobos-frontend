/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import Modal from "react-responsive-modal";
import user from "../../assets/images/user.png";
import {
  deleteArticleComment,
  updateArticleComment
} from "../../redux/actions/commentAction";

const token = sessionStorage.getItem("token");
const decodeToken = jwt.decode(token);

class AllComments extends Component {
  state = {
    body: "",
    open: false,
    id: 0
  };

  onDelete(id) {
    const { slug } = this.props;
    this.props.deleteArticleComment(id, slug);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      body: this.state.body
    };
    this.props.updateArticleComment(data, this.state.id);
    this.setState({ open: false });
  }

  onChangeHandler(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  render() {
    const { comments } = this.props;
    return (
      <>
        <div className="commentDiv">
          <h4 className="commentCount">
            {" "}
            {comments !== undefined ? (
              <i className="fa fa-comments"> {comments.length} Comments</i>
            ) : (
              "No comment created yet!"
            )}
          </h4>
          {comments !== undefined
            ? comments.map(comment => (
                <div className="commentPanel" key={comment.id}>
                  <div className="commentLeft">
                    <img
                      src={
                        comment.User.image !== null ? comment.User.image : user
                      }
                      alt={comment.User.image}
                    />
                  </div>
                  <div className="commentRight">
                    <p>
                      <b>{comment.User.username}</b>
                      {decodeToken !== null &&
                      decodeToken.id === comment.user ? (
                        <span className="commentFunc">
                          <button
                            onClick={() =>
                              this.setState({
                                open: true,
                                body: comment.body,
                                id: comment.id
                              })
                            }
                            style={{ background: "none" }}
                          >
                            <i
                              className="fa fa-edit"
                              style={{ color: "black" }}
                            />
                          </button>
                          <Modal
                            open={this.state.open}
                            onClose={() => this.setState({ open: false })}
                            center
                            focusTrapped
                          >
                            <form
                              onSubmit={this.onSubmitHandler.bind(this)}
                              className="updateCommentForm"
                            >
                              <h2>Update Comment</h2>
                              <textarea
                                type="text"
                                name="body"
                                className="updateCommentBody"
                                value={this.state.body}
                                onChange={this.onChangeHandler.bind(this)}
                              />
                              <button
                                type="submit"
                                className="btn-updateComment"
                              >
                                Update Comment
                              </button>
                            </form>
                          </Modal>

                          <button
                            onClick={() => this.onDelete(comment.id)}
                            style={{ background: "none" }}
                          >
                            <i className="fa fa-trash-o" />
                          </button>

                          <i className="fa fa-ellipsis-v" />
                        </span>
                      ) : null}
                      <br />
                      <br />
                      <label htmlFor="body">{comment.body}</label>
                    </p>

                    <p>
                      <span className="commentDate">
                        <i className="fa fa-clock-o" />{" "}
                        {new Date(
                          Date.parse(comment.createdAt)
                        ).toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </>
    );
  }
}
AllComments.propTypes = {
  comments: propTypes.array,
  deleteArticleComment: propTypes.func,
  updateArticleComment: propTypes.func,
  slug: propTypes.string
};
const mapStateToProps = state => ({
  deleteMessage: state.message
});

export default connect(
  mapStateToProps,
  { deleteArticleComment, updateArticleComment }
)(AllComments);
