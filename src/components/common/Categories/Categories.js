import React from "react";
import { Link } from "react-router-dom";

const Categories = () => (
  <>
    <div className="categories">
      <Link to="/">HOME</Link>
      <Link to="tech">TECHNOLOGY</Link>
      <Link to="design">DESIGN</Link>
      <Link to="entertainment">ENTERTNAIMENT</Link>
      <Link to="culture">CULTURE</Link>
      <Link to="more">MORE</Link>
    </div>
  </>
);

export default Categories;
