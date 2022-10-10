import React, { useContext, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {contexto} from '../../Context/Contexto';
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css';
import { NavLink } from 'react-router-dom';

const Cart =()=>{
  const {carritoCompra, acum, setAcum}= useContext(contexto);
  const { eliminarProducto }= useContext (contexto);
  const { setCantiCarrito }= useContext(contexto);

  const calcularPrecio=()=>{
    const calculo = (total, currentValue, currentIndex, arr)=>{
      return total += currentValue.precio * currentValue.cantidad;
    }
    const precio= carritoCompra.reduce(calculo,0);
    setAcum(precio);
  };
  
  const totalCarrito=()=>{
    const totalItems = (total, currentValue, currentIndex, arr)=>{
      return total += currentValue.cantidad;
    }
    const totalFinal= carritoCompra.reduce(totalItems,0);
    setCantiCarrito(totalFinal);
  };
    
  useEffect(()=>{
    calcularPrecio();
    totalCarrito();
  },[carritoCompra]);

  if(carritoCompra.length ==0){
    return(
      <>
        <p>No hay productos en tu carrito</p>
        <NavLink to="/">
          <Button variant="primary" className="botonComprar">COMPRAR</Button>
        </NavLink>
      </>
    );
  }
  else{
    return(
      <div className="tabla">
        <Table striped>
          <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>PRECIO POR UNIDAD</th>
              <th>CANTIDAD</th>
              <th>PRECIO</th>
            </tr>
          </thead>
          <tbody>
            {
              carritoCompra.map((item, index )=> {
                return(
                  <tr key={index} >
                    <td >{item.nombre}</td>
                    <td >{item.precio}</td>
                    <td >{item.cantidad}</td>
                    <td >{item.cantidad*item.precio}</td>
                    <td><button onClick={()=>eliminarProducto(item.id)} id="botonBasura"><DeleteIcon id="cbasura" /></button></td>
                  </tr>
                )
              })
            }
    
          </tbody>
        </Table>
        <Table striped>
          <thead>
            <tr>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${acum}</td>
              <td>
                <NavLink to={`/carrito`}>
                  <Button variant="primary" id="finalizarCompra">CONTINUAR</Button>
                </NavLink>
              </td>
            </tr>
          </tbody>     
  
        </Table>

      </div>
    )
  };

}

export default Cart;