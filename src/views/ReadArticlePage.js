import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DisplayContent from "Dante2";
import Navbar from "../components/common/Navbar";
import Spinner from "../components/common/Spinner";
import LikeDislike from "../components/LikeDislikeButton/LikeDislike";
import FollowButton from "../components/common/Follow/FollowButton";
import Bookmark from "../components/common/Bookmark/Bookmark";
import AuthorInfo from "../components/common/AuthorInfo/AuthorInfo";
import ShareArticle from "../components/common/ShareArticle/ShareArticle";
import ReportArticle from "../components/common/ReportArticle/ReportArticle";
import RateArticle from "../components/common/RateArticle/RateArticle";
import CommentArticle from "./comment";
import { getUserProfile } from "../redux/actions/userActions";
import { getArticle } from "../redux/actions/articleActions";
import StarRate from "../components/articles/StarRating";
import {
  rateArticle,
  getArticleRating
} from "../redux/actions/articleRatingAction";
import {
  fetchReaction,
  likeAction,
  dislikeAction
} from "../redux/actions/readArticleActions";

class ReadArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Article: {},
      token: ""
    };
    const { slug } = props.match.params;
    props.fetchReaction(slug);
  }

  async componentWillMount() {
    const { slug } = this.props.match.params;
    this.props.getArticle(slug);
    await this.props.getArticleRating(this.props.match.params.slug);
  }

  async componentDidMount() {
    const username = sessionStorage.getItem("username") || "";
    await this.props.getUserProfile(username);
    const token = sessionStorage.getItem("token");
    this.setState({ token });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.Article) {
      this.setState({ Article: newProps.Article });
    }
    if (
      this.props.readArticleReducer.hasdisliked ||
      this.props.readArticleReducer.hasliked
    ) {
      this.styleButtons();
    }
  }

  styleButtons = () => {
    const aa = document.getElementById("like");
    const bb = document.getElementById("dislike");
    if (document.readyState === "complete") {
      if (this.props.readArticleReducer.hasliked) {
        aa.classList.remove("no-reaction");
      } else {
        aa.classList.add("no-reaction");
      }
      if (this.props.readArticleReducer.hasdisliked) {
        bb.classList.remove("no-reaction");
      } else {
        bb.classList.add("no-reaction");
      }
    }
  };

  likeFunc = () => {
    const { slug } = this.props.match.params;
    this.props.likeAction(slug);
  };

  dislikeFunc = () => {
    const { slug } = this.props.match.params;
    this.props.dislikeAction(slug);
  };

  async handleRating(rating) {
    const token = sessionStorage.getItem("token");
    const msg = document.getElementById("warn");
    if (!token) {
      msg.classList.add("reveal");
    }
    const data = {
      slug: this.props.match.params.slug,
      rating: rating.toString()
    };
    await this.props.rateArticle(data);
    await this.props.getArticleRating(this.props.match.params.slug);
  }

  render() {
    const { Article } = this.state;
    const { rating } = this.props;
    if (Article.article) {
      const content = JSON.parse(Article.article.body);
      const { blocks } = content.article.body;
      const contentSide = blocks.splice(1, blocks.length);
      return (
        <>
          <Navbar profile={this.props.profile} token={this.state.token} />
          <div className="article-wrapper">
            <div className="side">Side</div>
            <div className="article-content">
              <div className="content-title">{Article.article.title}</div>
              <div className="above-content">
                {console.log(Article.article)}
                <AuthorInfo
                  image={Article.article.author.image}
                  readtime={Article.article.readtime}
                  name={Article.article.author.username}
                  created={Article.article.createdAt}
                />
                <FollowButton author={Article.article.author.username} />
                <Bookmark />
              </div>
              <div className="content-body">
                <DisplayContent
                  content={{ blocks: contentSide, entityMap: {} }}
                  read_only
                />
              </div>
              <div className="content-actions">
                <div className="like-dislike">
                  <LikeDislike
                    likeFunc={this.likeFunc}
                    dislikeFunc={this.dislikeFunc}
                    likeNum={this.props.readArticleReducer.likeNum}
                    dislikeNum={this.props.readArticleReducer.dislikeNum}
                    slug={this.props.match.params.slug}
                  />
                </div>
                <ShareArticle />
                <ReportArticle />
                {rating !== undefined &&
                sessionStorage.getItem("token") !== null ? (
                  <StarRate
                    value={rating.average}
                    onClick={value => this.handleRating(value)}
                    editing
                  />
                ) : (
                  <StarRate
                    value={
                      this.props.rating.rating !== undefined
                        ? this.props.rating.rating.average
                        : 0
                    }
                    onClick={value => this.handleRating(value)}
                    editing="false"
                  />
                )}
              </div>
            </div>
            <div className="side">side</div>
          </div>
          <div className="comment-section">
            <CommentArticle slug={Article.article.slug} />
          </div>
        </>
      );
    }
    return (
      <>
        <Navbar profile={this.props.profile} token={this.state.token} />
        <Spinner />
      </>
    );
  }
}

ReadArticlePage.propTypes = {
  profile: PropTypes.object.isRequired,
  getArticle: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  match: PropTypes.object,
  getUserProfile: PropTypes.func,
  fetchReaction: PropTypes.func,
  likeAction: PropTypes.func,
  dislikeAction: PropTypes.func,
  readArticleReducer: PropTypes.object,
  rateArticle: PropTypes.func,
  getArticleRating: PropTypes.func
};

const mapStateToProps = state => {
  console.log(state.rating);
  return {
    profile: state.profile,
    Article: state.articles.article,
    readArticleReducer: state.readArticleReducer,
    rating: state.rating
  };
};

const mapDispatchToProps = {
  getArticle,
  fetchReaction,
  likeAction,
  dislikeAction,
  getUserProfile,
  rateArticle,
  getArticleRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadArticlePage);
