import React, {createContext, useState} from "react";
import { descripcionProductos } from './productos';
import {doc, getDoc, collection, updateDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase';

export const contexto = createContext();
const {Provider} = contexto;
const CustomProvider =({children})=>{
    const [prod, setProd]= useState ( descripcionProductos);
    const [cantiCarrito, setCantiCarrito]= useState(0);
    const [acum, setAcum]= useState(0);
    const [carritoCompra, setCarritoCompra] =useState([]);
    const controlStock=(idBusqueda)=>{
        const existencia= carritoCompra.findIndex(i=>i.id==idBusqueda);
        return existencia;
    }
    const agregarProducto =({nombre, id, cantidad, precio})=>{
        const index= controlStock(id);
        if (index==-1){
            const listaNueva = [...carritoCompra, {nombre, id, cantidad, precio}];
            setCarritoCompra(listaNueva);
        }
        else{
            const listaNueva = [...carritoCompra];
            listaNueva[index].cantidad= listaNueva[index].cantidad + cantidad;
            setCarritoCompra(listaNueva);
        }
    };
    const eliminarProducto=(ids)=>{
        const lista=[...carritoCompra];
        const listaReducida= lista.filter((it)=>it.id != ids)  
        setCarritoCompra(listaReducida);
    };
    const vaciarCarrito=()=>{
        setCarritoCompra([]);
    };
    const stockNuevo= async(id, cantidad)=>{
        const porductosCollection = collection (db, 'productos');
        const refDoc= doc(porductosCollection, id)
        const getdoc = await getDoc(refDoc)
        const datos = getdoc.data()
        console.log(datos);
        datos.stock-=cantidad;
        updateDoc(refDoc,datos).then(()=>console.log('producto actualizado'))
    }
    const actualizacionDatos=()=>{
        carritoCompra.map((i)=>{stockNuevo(i.id, i.cantidad)});
    }
    return (
        <Provider value={{prod, agregarProducto, carritoCompra, eliminarProducto, vaciarCarrito, cantiCarrito, setCantiCarrito, acum, setAcum, actualizacionDatos }}> {children}</Provider>
    )
};

 export default CustomProvider;