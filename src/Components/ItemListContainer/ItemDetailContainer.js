import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ItemListDetail from './ItemListDetail';
import { contexto } from './../../Context/Contexto';


const ItemDetailContainer=()=>{
    const params = useParams();


    const { prod }= useContext(contexto);
    



    const promesaDetalle = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(prod);
            rej ('Error');
        },10);
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
            < ItemListDetail arrayProductoCompleto={productoCompleto[params.detalleId - 1]} />
        </div>
        }
        </>
        
    )
}
export default ItemDetailContainer