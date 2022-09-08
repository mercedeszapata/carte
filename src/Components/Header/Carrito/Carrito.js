import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Carrito.css';
import { NavLink } from 'react-bootstrap';
import { rgbToHex } from '@mui/material';
const Carrito= ()=>{
    return (
        <NavLink to="/cart">
            <button id="botonCarrito"><ShoppingCartIcon id="carrito" /></button>    
        </NavLink>
        
    )
}
export default Carrito