import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Link className='text-decoration-none fw-semibold nav-image' to = '/'>
        <Navbar.Brand><img
              alt=""
              src="https://moodle.lingua-institut.com/pluginfile.php/1/theme_mb2mcl/logo/1644584406/logo-mylingua.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="text-decoration-none  text-secondary me-3" to="/courses">Courses</NavLink>
            <NavLink className="text-decoration-none  text-secondary me-3" to="/faq">Faq</NavLink>
            <NavLink className="text-decoration-none  text-secondary me-3" to="/blog">Blog</NavLink>
            </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Header;