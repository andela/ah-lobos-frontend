import React from "react";
import PropTypes from "prop-types";

const Card = ({ cardType, cardNumber, cardIcon, cardColor }) => (
  <>
    <div className="admin-card" style={{ backgroundColor: cardColor }}>
      <div className="card-top">
        <h4>{cardType}</h4>
      </div>
      <div className="card-middle">
        {cardNumber !== "undefined" ? cardNumber : 0}
      </div>
      <div className="card-bottom">
        <img src={cardIcon} alt="notifications" />
      </div>
    </div>
  </>
);

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  cardIcon: PropTypes.string.isRequired,
  cardColor: PropTypes.string.isRequired
};

export default Card;
