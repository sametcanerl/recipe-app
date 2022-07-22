import React from "react";
import Nav, { Logo, Menu, MenuLink } from "./Navbar.style";
const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap" >
      <Logo to="/">
        <i>{"<SametCan/>"}</i>
        <span>Recipe</span>
      </Logo>

      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
