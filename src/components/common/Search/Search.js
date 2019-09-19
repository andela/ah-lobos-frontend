/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
// import { browserHistory } from "react-router";
import { searchMethod } from "../../../redux/actions/searchAction";
import searchIm from "../../../assets/images/search.svg";

export class SearchItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      searchOption: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const { data, searchOption } = this.state;
    await this.props.all.searchMethod(searchOption, data);
    this.props.all.history.push("/search/content");
  }

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit} className="searchFunctionality">
          <div className="searchDiv-container">
            <div className="searchDiv-input">
              <input
                type="text"
                name="data"
                className="searchIn"
                placeholder="Search..."
                onChange={this.onChange}
                value={this.state.data}
              ></input>
            </div>
            <div className="custom-select">
              <select name="searchOption" onChange={this.onChange}>
                <option value="all">all</option>
                <option value="title">title</option>
                <option value="author">author</option>
                <option value="description">description</option>
                <option value="tag">tag</option>
              </select>
            </div>
            <div className="searchDiv-button">
              <button className="button-search">
                <img src={searchIm} alt=""></img>
                {/* Search */}
              </button>
            </div>
          </div>
        </Form>
      </>
    );
  }
}

SearchItems.propTypes = {
  searchMethod: propTypes.func.isRequired,
  all: propTypes.object
};

const mapStateToProps = state => ({
  searchData: state.searchData
});

export default connect(
  mapStateToProps,
  { searchMethod }
)(SearchItems);
