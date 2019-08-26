import React from "react";
import jwt from "jsonwebtoken";
import NavBar from "../components/common/Navbar";

const token = sessionStorage.getItem("token");
const decodeToken = jwt.decode(token);
const LandingPage = () => {
  return (
    <div>
      <NavBar token={token} decodeToken={decodeToken} />
    </div>
  );
};

export default LandingPage;
