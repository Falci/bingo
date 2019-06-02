import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export const Header = ({ children }) => (
  <Navbar color="primary" light expand="md">
    <NavbarBrand className="text-white">{children}</NavbarBrand>
  </Navbar>
);
