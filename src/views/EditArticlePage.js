/* eslint-disable max-len */
import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import ArticleTextEditor from "../components/ArticleTextEditor/ArticleTextEditor";
import Spinner from "../components/common/Spinner";
import { getUserProfile } from "../redux/actions/userActions";
import {
  createArticle,
  updateArticle,
  uploadImage,
  getArticle
} from "../redux/actions/articleActions";

import { getDataFromEditor } from "../helpers/ItemFromEditor/getItemFromEditor";

class EditArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Article: {},
      slug: "",
      images: [],
      redirect: false,
      token: ""
    };
  }

  componentWillMount() {
    const { slug } = this.props.match.params;
    this.setState({ slug });
    this.props.getArticle(slug);
  }

  componentDidMount() {
    const username = sessionStorage.getItem("username") || "";
    this.props.getUserProfile(username);
    const token = sessionStorage.getItem("token");
    this.setState({ token });
  }

  componentWillReceiveProps(newProps) {
    const { NewUploadedImage, UpdateRes } = newProps;
    const currentUploadImagePosition = ArticleTextEditor.getCurrentUploadImagePos();
    if (newProps.Article) {
      this.setState({ Article: newProps.Article });
    }
    if (NewUploadedImage.secure_url) {
      toast.success("Image uploaded successfully");
      const { images } = this.state;
      images.push({
        position: currentUploadImagePosition,
        url: NewUploadedImage.secure_url
      });
      this.setState({ images });
    }
    if (UpdateRes.article) {
      toast.success(`You have updated successfully`);
      this.setState({ redirect: true });
    }
  }

  render() {
    const { Article, slug } = this.state;
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (Article.article) {
      const content = JSON.parse(Article.article.body);
      const { blocks } = content.article.body;
      const tags = Article.article.tagList;
      return (
        <>
          <Navbar profile={this.props.profile} token={this.state.token} />
          <ArticleTextEditor
            tags={tags}
            slug={slug}
            images={this.state.images}
            edtrState={{ blocks, entityMap: {} }}
            isUpdating
            uploadImage={this.props.uploadImage}
            createArticle={this.props.createArticle}
            updateArticle={this.props.updateArticle}
            getFromEditor={getDataFromEditor}
            notifydeafault={this.notifydeafault}
          />
        </>
      );
    }
    return (
      <>
        <Spinner />
      </>
    );
  }
}

EditArticlePage.propTypes = {
  slug: PropTypes.string.isRequired,
  getArticle: PropTypes.func.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  createArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  NewUploadedImage: state.articles.uploadedImage,
  UpdateRes: state.articles.updatedArticle,
  profile: state.profile,
  Article: state.articles.article
});

const mapDispatchToProps = {
  createArticle,
  updateArticle,
  uploadImage,
  getUserProfile,
  getArticle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticlePage);
