import React from "react";
import starFill from "../../../assets/images/star-fill.svg";
import starEmpty from "../../../assets/images/star-empty.svg";

const RateArticle = () => (
  <>
    <div className="rating">
      <img src={starFill} alt="starFill" />
      <img src={starFill} alt="starFill" />
      <img src={starEmpty} alt="starEmpty" />
      <img src={starEmpty} alt="starEmpty" />
      <img src={starEmpty} alt="starEmpty" />
    </div>
  </>
);

export default RateArticle;
