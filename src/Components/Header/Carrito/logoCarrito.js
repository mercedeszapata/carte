import React, {useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Carrito.css';
import { NavLink } from 'react-router-dom';
import {contexto} from '../../../Context/Contexto';

const LogoCarrito=()=>{
    const { cantiCarrito }= useContext(contexto);
    return(
        <>
            <NavLink to="/cart">
                <button id="botonCarrito"><ShoppingCartIcon id="carrito" />{cantiCarrito}</button>    
            </NavLink>
        </>
    );
}

export default LogoCarrito;