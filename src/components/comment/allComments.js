/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import jwt from "jsonwebtoken";
import Modal from "react-responsive-modal";
import TimeAgo from "react-timeago";
import englishStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import user from "../../assets/images/user.png";
import LikeComment from "../LikeComment/LikeComment";
import {
  likeComment,
  dislikeComment,
  deleteArticleComment,
  updateArticleComment,
  getArticleComments
} from "../../redux/actions/commentAction";

const formatter = buildFormatter(englishStrings);

const token = sessionStorage.getItem("token");
const decodeToken = jwt.decode(token);

class AllComments extends Component {
  state = {
    body: "",
    open: false,
    id: 0,
    like: false,
    disLike: false,
    likeNum: 0
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

  onLike = () => {
    this.setState({ like: !this.state.like });
  };

  onDisLike = () => {
    this.setState({ disLike: !this.state.disLike });
    this.setState({ likeNum: this.state.likeNum - 1 });
  };

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
                      className="comment-user-image"
                    />
                  </div>
                  <div className="commentRight">
                    <div>
                      <div>
                        <span className="comment-user">
                          <b>{comment.User.username}</b>{" "}
                        </span>
                        <span className="time-ago">
                          <TimeAgo
                            date={comment.createdAt}
                            formatter={formatter}
                          />
                        </span>
                      </div>
                      <p>{comment.body}</p>
                    </div>
                    <div className="like-comment">
                      <div>
                        <LikeComment
                          commentLikes={comment.comment}
                          onLike={() => this.props.likeComment(comment.id)}
                          onDisLike={() =>
                            this.props.dislikeComment(comment.id)
                          }
                          token={token}
                        />
                      </div>
                      {decodeToken !== null &&
                      decodeToken.id === comment.user ? (
                        <div className="commentFunc">
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
                        </div>
                      ) : null}
                    </div>
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
  slug: propTypes.string,
  likeComment: propTypes.func.isRequired,
  dislikeComment: propTypes.func.isRequired
};
const mapStateToProps = state => ({
  deleteMessage: state.message,
  messageLiked: state.comments.messageLiked,
  messageDisliked: state.comments.messageDisliked
});

export default connect(
  mapStateToProps,
  {
    deleteArticleComment,
    updateArticleComment,
    likeComment,
    dislikeComment,
    getArticleComments
  }
)(AllComments);
