import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../../components/common/Navbar";
import LikeDislike from "../../components/LikeDislikeButton/LikeDislike";
import swain from "../../assets/images/swain.jpg";
import FollowButton from "../../components/common/Follow/FollowButton";
import Bookmark from "../../components/common/Bookmark/Bookmark";
import AuthorInfo from "../../components/common/AuthorInfo/AuthorInfo";
import ShareArticle from "../../components/common/ShareArticle/ShareArticle";
import ReportArticle from "../../components/common/ReportArticle/ReportArticle";
import RateArticle from "../../components/common/RateArticle/RateArticle";
import { getUserProfile } from "../../redux/actions/userActions";
import {
  fetchReaction,
  likeAction,
  dislikeAction
} from "../../redux/actions/readArticleActions";

class ReadArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    const { slug } = props.match.params;
    props.fetchReaction(slug);
  }

  async componentDidMount() {
    const username = sessionStorage.getItem("username") || "";
    await this.props.getUserProfile(username);
    const token = sessionStorage.getItem("token");
    this.setState({ token });
  }

  componentDidUpdate() {
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

  render() {
    return (
      <>
        <Navbar profile={this.props.profile} token={this.state.token} />
        <div className="article-wrapper">
          <div className="side">Side</div>
          <div className="article-content">
            <div className="content-title">
              What a very bad day at work taught me about building Stack
              Overflow’s community
            </div>
            <div className="content-blurb">
              I know what it’s like for victims who come forward with
              allegations against a member of Congress — it happened to me
            </div>
            <div className="above-content">
              <AuthorInfo />
              <FollowButton />
              <Bookmark />
            </div>
            <div className="article-banner">
              <img src={swain} alt="swain" />
            </div>
            <div className="content-body">
              Over the course of her exhaustive piece, Mayer goes to great to
              cast Franken as a victim, and to criticize the Washington
              politicos for demanding his resignation before he could first
              appear before the Ethics Committee. But at no point does Mayer
              adequately address the hardships an accuser must endure over the
              course of such an investigation. And I should know what it’s like
              to testify before the congressional ethics panel; I am part of a
              relatively small group of people who have actually come forward
              with allegations against a sitting member of Congress.
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
              <RateArticle />
            </div>
          </div>
          <div className="side">side</div>
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
  readArticleReducer: PropTypes.object
};

const mapDispatchToProps = {
  getUserProfile,
  fetchReaction,
  likeAction,
  dislikeAction
};

const mapStateToProps = state => ({
  profile: state.profile,
  readArticleReducer: state.readArticleReducer
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadArticle);
