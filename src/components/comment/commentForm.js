import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import propTypes from "prop-types";
import { commentArticle } from "../../redux/actions/commentAction";

class CommentForm extends Component {
  state = {
    body: ""
  };

  onChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  // eslint-disable-next-line consistent-return
  onSubmit(e) {
    e.preventDefault();
    if (this.state.body === "") {
      return toast.warn("Comment should not be empty!");
    }
    const data = {
      payload: { ...this.state },
      slug: this.props.slug
    };
    this.props.commentArticle(data);
    this.setState({
      body: ""
    });
  }

  render() {
    return (
      <>
        <div className="commentDiv">
          <h2 className="commentCount">Comment an article</h2>
          <textarea
            type="text"
            name="body"
            value={this.state.body}
            className="commentBody"
            placeholder="Write a comment..."
            onChange={this.onChange.bind(this)}
          />
          <br />
          <button
            className="btn-comment"
            type="submit"
            onClick={this.onSubmit.bind(this)}
          >
            Comment
          </button>
        </div>
      </>
    );
  }
}
CommentForm.propTypes = {
  commentArticle: propTypes.func.isRequired,
  slug: propTypes.string
};

export default connect(
  null,
  { commentArticle }
)(CommentForm);
