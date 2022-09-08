import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ItemListDetail from './ItemListDetail';



const ItemDetailContainer=()=>{
    const params = useParams();
    console.log(params.detalleId);

    const descripcionCompletaProductos= [
        {imagen:'https://i.ibb.co/LtVQZf2/Recurso-1.png', nombre:'Individual', descripcion: 'texto informativo',precio:'$',id:'1', categoria:'prodvarios'},
        {imagen:'https://i.ibb.co/5R5sLpD/menu.png', nombre:'Block Menú mensual', descripcion: 'texto informativo',precio:'$', id:'2', categoria:'prodvarios'},
        {imagen:'https://i.ibb.co/x7QYFM2/planner.png', nombre:'Block Planner', descripcion: 'texto informativo',precio:'$', id:'3', categoria:'prodvarios'},
        {imagen:'https://i.ibb.co/tbfS8DF/agradecimiento.png', nombre:'Tarjeta agradecimiento', descripcion: 'texto informativo',precio:'$',id:'4', categoria:'tarjetas'},
        {imagen:'https://i.ibb.co/Nj4752x/musical.png', nombre:'Tarjeta musical', descripcion: 'texto informativo',precio:'$', id:'5', categoria:'tarjetas'},
        {imagen:'https://i.ibb.co/G99g2Pm/Navidad.png', nombre:'Tarjeta Navidad', descripcion: 'texto informativo',precio:'$', id:'6', categoria:'tarjetas'},
        {imagen:'https://i.ibb.co/56c9bdk/estampado1.png', nombre:'Ilustración: bosque', descripcion: 'texto informativo',precio:'$',id:'7', categoria:'ilustracion'},
        {imagen:'https://i.ibb.co/z2tvHTQ/estampado2.png" alt="estampado2', nombre:'Ilustración: animales', descripcion: 'texto informativo',precio:'$', id:'8', categoria:'ilustracion'},
        {imagen:'https://i.ibb.co/myYZ3bz/estampado3.png', nombre:'Ilustración: floral', descripcion: 'texto informativo',precio:'$', id:'9', categoria:'ilustracion'},
    ];

    const promesaDetalle = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(descripcionCompletaProductos);
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