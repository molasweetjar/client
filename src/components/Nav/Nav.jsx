import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signoutUser } from '../../store/action'
import './Nav.css'

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isSignin } = useSelector(state => state.userStore)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <h3 className='headerLogo'>Mola Sweet Jar</h3>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" style={{ textAlign: "center" }}>
      <Nav className='mr-auto'/>
      <Nav>
        <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
        <Nav.Link>About</Nav.Link>
        <Nav.Link onClick={() => history.push('/loc')}>Location</Nav.Link>
        <Nav.Link onClick={() => history.push('/testi')}>Testimony</Nav.Link>
        {
          user.username
            && <Nav.Link>Welcome { user.username }</Nav.Link>
        }
        {
          isSignin
            ? <Nav.Link onClick={() => { dispatch(signoutUser()); localStorage.removeItem('token') }}>SignOut</Nav.Link>
            : <Nav.Link onClick={() => history.push('/signin')}>Signin</Nav.Link>
        }
        {
          (user.role === 'admin' && user.username === 'molasweetjar')
            && <Nav.Link>Admin Page</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}