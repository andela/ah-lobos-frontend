import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import LikeDislike from "../../components/LikeDislikeButton/LikeDislike";
import FollowButton from "../../components/common/Follow/FollowButton";
import Bookmark from "../../components/common/Bookmark/Bookmark";
import AuthorInfo from "../../components/common/AuthorInfo/AuthorInfo";
import ShareArticle from "../../components/common/ShareArticle/ShareArticle";
import ReportArticle from "../../components/common/ReportArticle/ReportArticle";
import { getUserProfile } from "../../redux/actions/userActions";
import {
  fetchReaction,
  likeAction,
  dislikeAction
} from "../../redux/actions/readArticleActions";
import {
  rateArticle,
  getArticleRating
} from "../../redux/actions/articleRatingAction";
import StarRate from "../../components/articles/StarRating";
import { readArticle } from "../../redux/actions/articlesAction";

class ReadArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    const { slug } = props.match.params;
    props.fetchReaction(slug);
  }

  async componentWillMount() {
    await this.props.readArticle(this.props.match.params.slug);
    await this.props.getArticleRating(this.props.match.params.slug);
    await this.props.getUserProfile(sessionStorage.getItem("username"));
  }

  async componentDidMount() {
    const token = sessionStorage.getItem("token");
    this.setState({ token });
    this.styleButtons();
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
    const { story } = this.props;
    const { rating } = this.props.rating;
    return (
      <>
        <Navbar profile={this.props.profile} token={this.state.token} />

        <div className="article-wrapper">
          {story !== undefined ? (
            <>
              <div className="side">Side</div>
              <div className="article-content">
                <div className="content-title">
                  <p>{story.article.title}</p>
                </div>
                <div className="content-blurb">
                  <p>{story.article.description}</p>
                </div>
                <div className="above-content">
                  <AuthorInfo article={story.article} />
                  <FollowButton />
                  <Bookmark />
                </div>
                <div className="article-banner">
                  <img src={story.article.image} alt="" />
                </div>
                <div className="content-body">
                  <p>{story.article.body}</p>
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
                  <div id="warn" className="login-to-react">
                    Please{" "}
                    <Link to={`/login?redirect=/article/${story.article.slug}`}>
                      {" "}
                      login
                    </Link>{" "}
                    to rate this article
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
            </>
          ) : null}
        </div>
      </>
    );
  }
}

ReadArticle.propTypes = {
  match: PropTypes.object,
  profile: PropTypes.object,
  getUserProfile: PropTypes.func,
  fetchReaction: PropTypes.func,
  likeAction: PropTypes.func,
  dislikeAction: PropTypes.func,
  readArticleReducer: PropTypes.object,
  story: PropTypes.object,
  rateArticle: PropTypes.func,
  readArticle: PropTypes.func,
  getArticleRating: PropTypes.func,
  rating: PropTypes.object
};

const mapDispatchToProps = {
  getUserProfile,
  fetchReaction,
  likeAction,
  dislikeAction,
  readArticle,
  rateArticle,
  getArticleRating
};

const mapStateToProps = state => ({
  profile: state.profile,
  readArticleReducer: state.readArticleReducer,
  story: state.articles.story,
  rating: state.rating,
  rates: state.rating.average
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadArticle);
