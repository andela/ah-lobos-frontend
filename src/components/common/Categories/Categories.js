import React from "react";
import { Link } from "react-router-dom";

const Categories = () => (
  <>
    <div className="categories">
      <Link to="/">HOME</Link>
      <Link to="/">TECHNOLOGY</Link>
      <Link to="/">DESIGN</Link>
      <Link to="/">ENTERTNAIMENT</Link>
      <Link to="/">CULTURE</Link>
      <Link to="/">MORE</Link>
    </div>
  </>
);

export default Categories;
