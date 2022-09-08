import React from 'react';
import NavBar from './NavBar/NavBar';
import Carrito from './Carrito/Carrito';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header=()=>{
    return(
    <header>
        <div>
            <NavLink to="/">
            <img  src="https://i.ibb.co/qjq1LQz/Recurso-14.png" alt="logo" id="logo"></img>
            </NavLink>
        
        <img src="https://i.ibb.co/JnV4bSK/Recurso-1.png" id="nombreMarca"></img>
        <Carrito />
        </div>
       
        <NavBar />
       
    </header>
        
    ) 
        
}

export default Header