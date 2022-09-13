import React, {createContext, useState} from "react";
import { descripcionProductos } from './productos';

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider =({children})=>{
    
    const [prod, setProd]= useState ( descripcionProductos);



const [carritoCompra, setCarritoCompra] =useState([]);

const agregarProducto =({nombre, id, cantidad})=>{
    console.log("esta funcion agrega productos", nombre, id, cantidad);
    const listaNueva = [...carritoCompra, {nombre, id, cantidad}];
    console.log(listaNueva);
    setCarritoCompra(listaNueva);
};

const eliminarProducto=(ids)=>{
   const lista=[...carritoCompra];
 
   const listaReducida= lista.filter((it)=>it.id != ids)  
   
   
    setCarritoCompra(listaReducida);

   
};

// const eliminarProducto =(id)=>{
//     //eliminar usando filter
// console.log("esta funcion elimina productos")

//     };

return (
    <Provider value={{prod, agregarProducto, carritoCompra, eliminarProducto}}> {children}</Provider>
)
};
 export default CustomProvider;