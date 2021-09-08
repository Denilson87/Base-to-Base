import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import logo from '../../assets/images/logo.png'

import './styles.css'

function NavbarMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="navbar">
      <header>
        <div>
          <Link to="/donations">DONATE</Link>
          <span>|</span>
          <Link to="sign-in">LOGIN</Link>
        </div>
      </header>

      <Navbar light expand="lg" className="navebar-content">
        <div>
          <NavbarBrand>
            <img src={logo} alt="logo" />
          </NavbarBrand>
          <div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar className="navbar-items">
                <NavItem>
                  <NavLink tag={Link} to="/"><strong>HOME</strong></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/about-us"><strong>ABOUT ISOFS</strong></NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <strong>CONFERENCE</strong>
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/*<DropdownItem style={{ backgroundColor: '#008080'}}>
                      <NavLink tag={Link} to="/register">REGISTER</NavLink>
                    </DropdownItem>*/}
                    <DropdownItem >
                      <NavLink tag={Link} to="/speakers"><strong>SPEAKERS</strong></NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to="/agend">EVENTS</NavLink>
                    </DropdownItem>
                    <DropdownItem >
                      <NavLink tag={Link} to="/abstracts-submission">ABSTRACT SUBMISSION</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <strong>MOZAMBIQUE</strong>
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                      <NavLink tag={Link} to="/mozambique">MOZAMBIQUE</NavLink>
                    </DropdownItem>
                    <DropdownItem >
                      <NavLink tag={Link} to="/hotels">HOTELS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to="/safety">SAFETY</NavLink>
                    </DropdownItem>
                  
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>                  
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} to="/contacts"><strong>CONTACTS</strong></NavLink>
                </NavItem>

                {/*<NavItem>
                  <NavLink tag={Link} to="/" style={{color:'#d9534f'}}>
                    DONATE
                  </NavLink>
                </NavItem>*/}
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;