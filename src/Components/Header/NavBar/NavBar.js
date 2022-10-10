import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar=()=>{
  return(
  <>
    <Navbar bg="light" expand="lg" id="contenedorBarra">
      <Container  id="barraNavegacion">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown" className="opcionesMenu1">
              <NavDropdown.Item>
                <NavLink to = "/category/prodvarios">PRODUCTOS VARIOS></NavLink>
              </NavDropdown.Item>
              <NavLink to = "/category/tarjetas">
                <NavDropdown.Item href="#action/3.2">
                  TARJETAS
                </NavDropdown.Item>
              </NavLink>
              <NavLink to = "/category/ilustracion">
                <NavDropdown.Item href="#action/3.3">ILUSTRACIONES</NavDropdown.Item>
              </NavLink>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavLink to="/cart" id="opcionesMenu2">CARRITO</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  </>)       
}

export default NavBar