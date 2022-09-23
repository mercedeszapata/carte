import React, {createContext, useState} from "react";
import { descripcionProductos } from './productos';

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider =({children})=>{
    
    const [prod, setProd]= useState ( descripcionProductos);
    const [cantiCarrito, setCantiCarrito]= useState(0);
    const [acum, setAcum]= useState(0);


const [carritoCompra, setCarritoCompra] =useState([]);

const agregarProducto =({nombre, id, cantidad, precio})=>{

    const listaNueva = [...carritoCompra, {nombre, id, cantidad, precio}];
    
    setCarritoCompra(listaNueva);
};

const eliminarProducto=(ids)=>{
   const lista=[...carritoCompra];
 
   const listaReducida= lista.filter((it)=>it.id != ids)  
   
   
    setCarritoCompra(listaReducida);
    
   
};

const vaciarCarrito=()=>{
    
    setCarritoCompra([]);
};






return (
    <Provider value={{prod, agregarProducto, carritoCompra, eliminarProducto, vaciarCarrito, cantiCarrito, setCantiCarrito, acum, setAcum }}> {children}</Provider>
)
};
 export default CustomProvider;