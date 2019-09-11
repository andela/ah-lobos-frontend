import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DisplayContent from "Dante2";
import Navbar from "../components/common/Navbar";
import Spinner from "../components/common/Spinner";
import LikeDislike from "../components/LikeDislikeButton/LikeDislike";
import Bookmark from "../components/common/Bookmark/Bookmark";
import AuthorInfo from "../components/common/AuthorInfo/AuthorInfo";
import { ShareArticle } from "../components/common/ShareArticle/ShareArticle";
import ReportArticle from "../components/common/ReportArticle/ReportArticle";
import CommentArticle from "./comment";
import { getUserProfile } from "../redux/actions/userActions";
import { getArticle } from "../redux/actions/articleActions";
import StarRate from "../components/articles/StarRating";
import { followUser, unFollowUser } from "../redux/actions/followAction";
import {
  rateArticle,
  getArticleRating
} from "../redux/actions/articleRatingAction";
import {
  fetchReaction,
  likeAction,
  dislikeAction
} from "../redux/actions/readArticleActions";
import {
  bookmarkArticle,
  getBookmarkedArticles
} from "../redux/actions/articleBookmark";
import { createStats } from "../redux/actions/readingStatsAction";
import {
  getUserNotification,
  readNotification
} from "../redux/actions/userNotificationActions";

class ReadArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Article: {},
      token: "",
      showReport: false
    };
    const { slug } = props.match.params;
    props.fetchReaction(slug);
  }

  async componentWillMount() {
    const { slug } = this.props.match.params;
    const token = sessionStorage.getItem("token");
    if (token) {
      await this.props.createStats(slug);
    }
    this.props.getArticle(slug);
    await this.props.getUserNotification();
  }

  async componentDidMount() {
    await this.props.getBookmarkedArticles();
    await this.props.getArticleRating(this.props.match.params.slug);
    const username = sessionStorage.getItem("username") || "";
    await this.props.getUserProfile(username);
    const token = sessionStorage.getItem("token");
    this.setState({ token });
    if (
      this.props.readArticleReducer.hasdisliked ||
      this.props.readArticleReducer.hasliked
    ) {
      this.styleButtons();
    }
    await this.props.getUserNotification();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.Article) {
      this.setState({ Article: newProps.Article });
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

  showMenu = () => {
    this.setState({ showReport: true });
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

  async handleBookmark(slug) {
    const token = sessionStorage.getItem("token");
    const msg = document.getElementById("bookmark-article");
    if (!token) {
      msg.classList.add("show");
    }
    await this.props.bookmarkArticle(slug);
    await this.props.getBookmarkedArticles();
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
          <Navbar
            profile={this.props.profile}
            token={this.state.token}
            notification={this.state.notification}
            readUserNotification={this.readUserNotification}
          />
          <div className="article-wrapper">
            <div className="side">Side</div>
            <div className="article-content">
              <div className="content-title">{Article.article.title}</div>
              <div className="above-content">
                <AuthorInfo
                  image={Article.article.author.image}
                  readtime={Article.article.readtime}
                  name={Article.article.author.username}
                  created={Article.article.createdAt}
                />
                <div></div>
                {this.props.bookmarks !== undefined &&
                this.props.bookmarks.length >= 0 &&
                this.props.bookmarks.filter(
                  bookmarked => bookmarked.slug === Article.article.slug
                ).length !== 0 ? (
                  <Bookmark
                    isBookmarked
                    bookmark={() => {
                      this.handleBookmark(Article.article.slug);
                    }}
                  />
                ) : (
                  <Bookmark
                    isBookmarked={false}
                    bookmark={() => {
                      this.handleBookmark(Article.article.slug);
                    }}
                  />
                )}
              </div>
              <div id="bookmark-article" className="login-to-bookmark">
                Please{" "}
                <Link to={`/login?redirect=/articles/${Article.article.slug}`}>
                  {" "}
                  login
                </Link>{" "}
                to bookmark
              </div>
              <div className="content-body">
                <DisplayContent
                  content={{ blocks: contentSide, entityMap: {} }}
                  read_only
                />
                <div className="all-tags">
                  {Article.article.tagList.map(tag => {
                    return (
                      <>
                        <Link
                          to={`/articles/searchtag/${tag}`}
                          className="tag-list"
                        >
                          {tag}
                        </Link>
                      </>
                    );
                  })}
                </div>
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
                <ShareArticle slug={Article.article.slug} />
                <ReportArticle
                  showReport={this.state.showReport}
                  onReport={() => this.showMenu}
                  slug={Article.article.slug}
                />
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
                      this.props.rating !== undefined
                        ? this.props.rating.average
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
  slug: PropTypes.string,
  match: PropTypes.object,
  getUserProfile: PropTypes.func,
  fetchReaction: PropTypes.func,
  likeAction: PropTypes.func,
  dislikeAction: PropTypes.func,
  readArticleReducer: PropTypes.object,
  rateArticle: PropTypes.func,
  getArticleRating: PropTypes.func,
  rating: PropTypes.object,
  bookmarkArticle: PropTypes.func,
  getBookmarkedArticles: PropTypes.func,
  bookmarks: PropTypes.object,
  createStats: PropTypes.func,
  getUserNotification: PropTypes.func
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    Article: state.articles.article,
    readArticleReducer: state.readArticleReducer,
    rating: state.rating.rating,
    bookmarks: state.bookmarks.bookmarks,
    follow: state.followAuser,
    unfollow: state.unfollowAuser,
    followees: state.getFollowee.followees,
    notification: state.notifications.notification
  };
};

const mapDispatchToProps = {
  getArticle,
  fetchReaction,
  likeAction,
  dislikeAction,
  getUserProfile,
  rateArticle,
  getArticleRating,
  getBookmarkedArticles,
  bookmarkArticle,
  unFollowUser,
  followUser,
  createStats,
  getUserNotification,
  readNotification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadArticlePage);
