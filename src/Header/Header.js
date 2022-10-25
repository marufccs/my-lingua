import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import './Header.css'

const Header = () => {
  const {logOut, user} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
    .then(() => {
      // Sign-out successful.
      navigate('/')

    }).catch((error) => {
      // An error happened.
    });
  }


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
            {
               user?
                <div>
            <NavLink onClick={handleLogOut} className="text-decoration-none  text-secondary me-3 " >Log Out</NavLink>
            <img className='rounded-circle w-25 h-75 displayPicture' src={user.photoURL} alt=""  />
              <span className='hide'>{user.displayName}</span>
                </div> 
                :
                 <div>
                  <NavLink className="text-decoration-none  text-secondary me-3 " to="/login">Log In</NavLink>
            <NavLink className="text-decoration-none  text-secondary me-3 " to="/register">Register Now</NavLink>
                 </div>
            }
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Header;