import { findByLabelText } from '@testing-library/react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar=()=>{
    return(<>
     
    <Navbar bg="light" expand="lg" id="contenedorBarra">
      <Container  id="barraNavegacion">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link to="/" id="opcionesMenu">INICIO</Nav.Link> */}
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
            <Nav.Link href="#link" id="opcionesMenu2">CARRITO</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </>) 
        
}


export default NavBar