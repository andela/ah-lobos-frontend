import React from "react";
import sam from "../../../assets/images/sam.jpg";

const AuthorInfo = () => (
  <>
    <div className="author-info">
      <div className="author-avi">
        <img src={sam} alt="sam" />
      </div>
      <div className="name-time">
        <div className="author-name">Dominic Swain</div>
        <div className="read-time">10 min read</div>
      </div>
    </div>
  </>
);

export default AuthorInfo;
