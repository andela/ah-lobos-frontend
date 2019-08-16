import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <>
    <Menu fixed="top" inverted className="line">
      <Link to="/login">
        <Button className="nav-brand">Login</Button>
      </Link>
    </Menu>
  </>
);

export default Navbar;
