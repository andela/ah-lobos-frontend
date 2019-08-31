import React from "react";
import gmail from "../../../assets/images/gmail.png";
import whatsapp from "../../../assets/images/whatsapp.svg";
import facebook from "../../../assets/images/facebook-share.svg";
import twitter from "../../../assets/images/twitter.png";

const ShareArticle = () => (
  <>
    <div className="share-icons">
      <img src={whatsapp} alt="whatsapp" />
      <img src={gmail} alt="gmail" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </div>
  </>
);

export default ShareArticle;
