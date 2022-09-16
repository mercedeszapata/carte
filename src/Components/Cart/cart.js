import React, { useContext, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {contexto} from '../../Context/Contexto';
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css';
import Swal from 'sweetalert2/dist/sweetalert2.all';


const Cart =()=>{

    const  {carritoCompra}= useContext(contexto);
    const { eliminarProducto }= useContext (contexto);
    const {vaciarCarrito}=useContext(contexto);
    const { cantiCarrito,setCantiCarrito }= useContext(contexto);
    const [acum, setAcum]= useState(0);
    
   
    const MostrarAlerta =()=>{
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'COMPRA REALIZADA CON ÉXITO',
        showConfirmButton: false,
        timer: 1500
      }); 
      vaciarCarrito();
      };

    const calcularPrecio=()=>{
      const calculo = (total, currentValue, currentIndex, arr)=>{
        return total += currentValue.precio * currentValue.cantidad;
      }
      const precio= carritoCompra.reduce(calculo,0);
      setAcum(precio);
    }

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
  <p>No hay productos en tu carrito</p>
);
  }
  else{
    return(
      <>
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
      <td><Button variant="primary" id="finalizarCompra" onClick={()=>MostrarAlerta()}>FINALIZAR COMPRA</Button></td>
    </tr>
  </tbody>     
  
</Table>


 
      </>

    )
  }

 
        

}
export default Cart;