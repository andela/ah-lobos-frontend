import React from "react";
import propTypes from "prop-types";
import StarRate from "react-rating";

const theme = {
  color: "#676654",
  border: "black",
  fontSize: "10px"
};

const Star = ({ editing, value, onClick }) => {
  return (
    <StarRate
      value={value}
      onClick={onClick}
      editing={editing}
      initialRating={value !== undefined ? value : 0}
      style={theme}
      emptySymbol="fa fa-star-o fa-2x"
      fullSymbol="fa fa-star fa-2x"
    />
  );
};

Star.propTypes = {
  editing: propTypes.string,
  value: propTypes.number,
  onClick: propTypes.func
};
export default Star;
