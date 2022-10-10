import React from 'react';
import NavBar from './NavBar/NavBar';
import LogoCarrito from './Carrito/logoCarrito';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header=()=>{
    return(
        <header>
            <div>
                <NavLink to="/">
                <img  src="https://i.ibb.co/qjq1LQz/Recurso-14.png" alt="logo" id="logo"></img>
                </NavLink>
            
            <img src="https://i.ibb.co/K6R79R1/Recurso-2-2.png" alt="Recurso-2-2" id="nombreMarca"></img>
            <LogoCarrito />
            </div>
            <NavBar />
        </header>
    ) 
 }

export default Header