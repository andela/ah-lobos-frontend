/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";

const TagsInput = props => {
  const [tags, setTags] = useState([]);
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = event => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="tags-input" style={{ marginBottom: "-100px" }}>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <span>{tag}</span>
            <i className="" onClick={() => removeTags(index)}>
              x
            </i>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="tags-input-field"
        style={{ border: "1px solid silver" }}
        onKeyUp={event => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add tags"
      />
    </div>
  );
};

TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired
};

export default TagsInput;
