import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import CommentForm from "../components/comment/commentForm";
import AllComments from "../components/comment/allComments";
import {
  getArticleComments,
  deleteArticleComment
} from "../redux/actions/commentAction";

const token = sessionStorage.getItem("token");

class CommentArticle extends Component {
  state = {
    allComments: []
  };

  componentWillMount() {
    this.props.getArticleComments(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      allComments: nextProps.comments
    });
    this.props.getArticleComments(this.props.slug);
  }

  render() {
    const { allComments } = this.state;
    return (
      <>
        {token != null ? <CommentForm slug={this.props.slug} /> : " "}
        <AllComments comments={allComments} slug={this.props.slug} />
      </>
    );
  }
}
CommentArticle.propTypes = {
  getArticleComments: propTypes.func.isRequired,
  comments: propTypes.array,
  slug: propTypes.string
};

const mapStateToProps = state => {
  return {
    data: state.comment,
    comments: state.comments.comments
  };
};
export default connect(
  mapStateToProps,
  { getArticleComments, deleteArticleComment }
)(CommentArticle);
