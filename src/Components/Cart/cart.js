import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import {contexto} from '../../Context/Contexto';
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css';

const Cart =()=>{

    const  {carritoCompra}= useContext(contexto);
    const { eliminarProducto }= useContext (contexto);

   console.log(carritoCompra);
        return(
 <Table striped>
       <thead>
         <tr>
          
           <th>PRODUCTO</th>
           <th>ID</th>
           <th>CANTIDAD</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         {
             carritoCompra.map((item, index )=> {
                 return(
                     <tr>
                             <td >{item.nombre}</td>
                             <td >{item.id}</td>
                             <td >{item.cantidad}</td>
                             <td><button onClick={()=>eliminarProducto(item.id)} id="botonBasura"><DeleteIcon id="cbasura" /></button></td>
                     </tr>
                
               )})
         }
         
       </tbody>
     </Table>
        )

}
export default Cart;