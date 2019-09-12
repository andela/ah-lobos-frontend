/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import EditorState from "../assets/widgets/EditorState";
import { getDataFromEditor } from "../helpers/ItemFromEditor/getItemFromEditor";
import ArticleTextEditor from "../components/ArticleTextEditor/ArticleTextEditor";
import {
  createArticle,
  updateArticle,
  uploadImage
} from "../redux/actions/articleActions";
import { getUserProfile } from "../redux/actions/userActions";
import "react-tagsinput/react-tagsinput.css";

const token = sessionStorage.getItem("token") || null;
const userPayload = jwt.decode(token) || "";
sessionStorage.setItem("username", userPayload.username);
const username = sessionStorage.getItem("username") || "";
export class CreateArticlePage extends Component {
  state = {
    images: [],
    redirect: false,
    slug: "",
    noImageUploaded: true,
    noArticleCreated: true
  };

  async componentDidMount() {
    await this.props.getUserProfile(username);
    if (this.props.profile.username === "") {
      location.href = "/";
    }
  }

  componentWillReceiveProps(newProps) {
    const { NewUploadedImage, NewArticle } = newProps;
    const currentUploadImagePosition = ArticleTextEditor.getCurrentUploadImagePos();
    if (NewUploadedImage.secure_url) {
      const { images } = this.state;
      images.push({
        position: currentUploadImagePosition,
        url: NewUploadedImage.secure_url
      });
      this.setState({ images });
    } else {
      this.setState({ noImageUploaded: true });
    }
    if (NewArticle.article) {
      const { slug } = NewArticle.article;
      toast.success("Article published successfully");
      this.setState({ redirect: true, slug });
    } else {
      this.setState({ noArticleCreated: true });
    }
  }

  notifydeafault = cantoast => {
    if (cantoast) {
      toast(
        `Publishing will become available
        when you have at least title and one paragraph`,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      );
    }
  };

  render() {
    const { slug } = this.state;
    if (this.state.redirect) {
      return <Redirect to={`/articles/${slug}`} />;
    }
    return (
      <>
        <Navbar profile={this.props.profile} token={token} />
        <ArticleTextEditor
          tags={[]}
          slug=""
          images={this.state.images}
          edtrState={EditorState}
          isUpdating={false}
          uploadImage={this.props.uploadImage}
          createArticle={this.props.createArticle}
          updateArticle={this.props.updateArticle}
          getFromEditor={getDataFromEditor}
          notifydeafault={this.notifydeafault}
        />
      </>
    );
  }
}

ArticleTextEditor.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  createArticle: PropTypes.func.isRequired,
  edtrState: PropTypes.instanceOf(Object).isRequired,
  updateArticle: PropTypes.func.isRequired
};

CreateArticlePage.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  createArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    NewUploadedImage: state.articles.uploadedImage,
    NewArticle: state.articles.currentArticles,
    profile: state.profile
  };
};

const mapDispatchToProps = {
  createArticle,
  updateArticle,
  uploadImage,
  getUserProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArticlePage);
