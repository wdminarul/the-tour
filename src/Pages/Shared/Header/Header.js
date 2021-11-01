import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import logo from "../../../images/logo.png"
import "./header.css"

const Header = () => {
  const {logOut,user} = useAuth()
  console.log(user)
  const history = useHistory();
  const goHome = ()=>{
    history.push('/home')
  }
  // menu bar section 
    return (
        <div className="">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="#home" onClick={goHome}><img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto">
    {/* conditionla rendaring  */}
    {user.email ?(
      <Nav >
              <button className="btn btn-danger" onClick={logOut}>Log Out</button>
              <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/my-order">My Order</Nav.Link>
              <Nav.Link as={HashLink} to="/manage">Mange Order</Nav.Link>
              <Nav.Link className="text-warning px-1">Profile: {user?.displayName}</Nav.Link>
              <p ></p>
      </Nav>
     
    ):(
      <Nav.Link as={HashLink} to="/login" className="btn btn-success">Login</Nav.Link>
    )
    }
    
    
   
      
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;