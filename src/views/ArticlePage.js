import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as articleActions from "../redux/actions/articleActions";

class ArticlePage extends Component {
  state = {
    article: {
      title: ""
    }
  };

  handleChange = event => {
    const article = { ...this.state.article, title: event.target.value };
    this.setState({ article });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createArticle(this.state.article);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Articles</h2>
        <h3>Add Article</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.article.title}
        />
        <input type="submit" value="save" />

        {this.props.articles.map(article => (
          <div key={article.title}>{article.title}</div>
        ))}
      </form>
    );
  }
}

ArticlePage.propTypes = {
  actions: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePage);
