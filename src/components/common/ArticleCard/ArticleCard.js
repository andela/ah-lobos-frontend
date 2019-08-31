import React, { Component } from "react";
import { Link } from "react-router-dom";
import yuliya from "../../../assets/images/yuliya.jpg";

class ArticleCard extends Component {
  constructor() {
    super();
    this.state = {
      article: {},
      author: {}
    };
  }

  componentDidMount() {
    const baseUrl = `https://ah-lobos-backend-swagger.herokuapp.com`;
    return fetch(`${baseUrl}/api/articles`, {
      method: "GET",
      headers: { "content-type": "application/json" }
    })
      .then(async res => {
        if (res.ok) {
          const data = await res.json();
          this.setState({ article: data.articles[0] });
          this.setState({ author: data.articles[0].author });
        }
        if (!res.ok) console.log("articles not okay");
      })
      .catch();
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="article-card">
            <img src={yuliya} alt="Yuliya Kosolapova" />
            <Link
              to={`/article/${this.state.article.slug}`}
              className="article-heading"
            >
              {this.state.article.title}
            </Link>
            <p className="article-blurb">{this.state.article.description}</p>
            <span className="article-author">
              - Written by {this.state.author.username}
            </span>
            <div className="article-stat">
              <span className="date">June 25 | </span>
              <span className="time-to-read">
                {this.state.article.readtime} |
              </span>
              <span className="rating">stars</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ArticleCard;
