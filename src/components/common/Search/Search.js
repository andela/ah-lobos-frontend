import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import { searchMethod } from "../../../redux/actions/SearchAction";
import searchIm from "../../../assets/images/search.svg";

export class SearchItems extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      searchOption: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { data, searchOption } = this.state;
    this.props.searchMethod(searchOption, data);
    this.props.all.history.push("/search/content");
  };

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
  all: propTypes.any
};

const mapStateToProps = state => ({
  searchData: state.searchData
});

export default connect(
  mapStateToProps,
  { searchMethod }
)(SearchItems);
