import React from 'react';
import {
  Nav,
  Link,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <Link href='/'>
          earlyoffice
        </Link>
        <Bars />
        <NavMenu>
          <Link href='/about' activeStyle>
            About
          </Link>
          <Link href='/services' activeStyle>
            Services
          </Link>
          <Link href='/contact-us' activeStyle>
            Contact Us
          </Link>
          <Link href='/sign-up' activeStyle>
            Sign Up
          </Link>
          {/* Second Nav */}
          {/* <NavBtnLink href='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink href='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
