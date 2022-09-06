import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';

import ItemListDetail from './ItemListDetail';



const ItemDetailContainer=()=>{
    
    const descripcionCompletaProductos= [
        {imagen:'https://i.ibb.co/LtVQZf2/Recurso-1.png', nombre:'Producto 1', descripcion: 'texto informativo',precio:'$',id:'1'},
        {imagen:'https://i.ibb.co/LtVQZf2/Recurso-1.png', nombre:'Producto 2', descripcion: 'texto informativo',precio:'$', id:'2'},
        {imagen:'https://i.ibb.co/LtVQZf2/Recurso-1.png', nombre:'Producto 3', descripcion: 'texto informativo',precio:'$', id:'3'},
    ];

    const promesaDetalle = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(descripcionCompletaProductos);
            rej ('Error');
        },3000);
    });

    const [productoCompleto, setProductoCompleto]= useState ([]);

   useEffect(()=>{
    promesaDetalle.then((des)=>{
    setProductoCompleto(des);
   
    });
   },[]);
   
   
    
    return (
        
        <>
        {
         productoCompleto.length > 0 &&
            <div>
            < ItemListDetail arrayProductoCompleto={productoCompleto[0]} />
        </div>
        }
        </>
        
    )
}
export default ItemDetailContainer