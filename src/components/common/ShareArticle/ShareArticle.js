/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import propTypes from "prop-types";
import gmail from "../../../assets/images/gmail.png";
import whatsapp from "../../../assets/images/whatsapp.svg";
import facebook from "../../../assets/images/facebook-share.svg";
import twitter from "../../../assets/images/twitter.png";

export class ShareArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick(slug) {
    const url = `https://ah-lobos-frontend.herokuapp.com/articles/${slug}`;
    window.open(`https://twitter.com/intent/tweet?text=${url}`);
  }

  whatsuponClick(slug) {
    const url = `https://ah-lobos-frontend.herokuapp.com/articles/${slug}`;
    window.open(`https://wa.me/?text=${url}`);
  }

  emailonClick(slug) {
    const url = `https://ah-lobos-frontend.herokuapp.com/articles/${slug}`;
    window.open(`mailto:?subject=${this.props.slug}&body=${url}`);
  }

  facebookonClick(slug) {
    const url = `https://ah-lobos-frontend.herokuapp.com/articles/${slug}`;
    window.open(`https:www.facebook.com/sharer/sharer.php?u=${url}`);
  }

  render() {
    return (
      <>
        <div className="share-icons">
          <img
            src={whatsapp}
            alt="whatsapp"
            id="whatsup"
            onClick={() => this.whatsuponClick(this.props.slug)}
          />

          <img
            src={gmail}
            alt="gmail"
            id="gmail"
            onClick={() => this.emailonClick(this.props.slug)}
          />
          <img
            src={facebook}
            alt="facebook"
            id="facebook"
            onClick={() => this.facebookonClick(this.props.slug)}
          />
          <img
            src={twitter}
            alt="twitter"
            id="twitter"
            onClick={() => this.onClick(this.props.slug)}
          />
        </div>
      </>
    );
  }
}
ShareArticle.propTypes = {
  slug: propTypes.string
};

export default ShareArticle;
