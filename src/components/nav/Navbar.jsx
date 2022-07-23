import React, { useContext } from "react";
import { logOut } from "../../auth/firebase";
import { AuthContext } from "../../context/AuthContext";
import Nav, { Logo, Menu, MenuLink } from "./Navbar.style";
const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  
  return (

    
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{"<SametCan/>"}</i>
        <span>Recipe</span>
      </Logo>

      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {currentUser ? (
          <>
          <h5>{currentUser.displayName}</h5>
           <MenuLink to="/login"onClick={()=>logOut()} >Logout</MenuLink>
          </>
         
        ) : (
          <>
            <MenuLink to="/login">Login</MenuLink>
            <MenuLink to="/register">Register</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
