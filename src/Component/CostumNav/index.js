import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const CostumNav = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);

  return (
    <div className="costum-nav">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          Home
        </NavbarBrand>
        <NavbarBrand href="/Dictionary" className="mr-auto">
          Dictionary
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CostumNav;
