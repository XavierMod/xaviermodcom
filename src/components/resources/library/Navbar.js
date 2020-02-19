import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const NavBarWrapper = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(props);
  const toggle = () => setIsOpen(!isOpen);

  const links = props.navLinks.map((el, ind, arr) => {
    return (
      <React.Fragment>
        <NavItem>
          <NavLink href={props.getUrl.match.path + `/${el}`}>{el}</NavLink>
        </NavItem>

      </React.Fragment>

        )
    });

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {links}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarWrapper;