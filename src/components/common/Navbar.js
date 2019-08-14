import React from "react";
import { Menu } from "semantic-ui-react";
import "../../styles/mains.scss";

const Navbar = () => (
    <Menu fixed="top" inverted className="line">
        <h2 className="nav-brand">authorsHaven</h2>
    </Menu>
);

export default Navbar;
