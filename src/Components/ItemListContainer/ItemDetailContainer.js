import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ItemListDetail from './ItemListDetail';
import { contexto } from './../../Context/Contexto';
import {db} from '../../firebase/firebase';
import {doc, getDoc, collection} from 'firebase/firestore';



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
     const porductosCollection = collection (db, 'productos');
    const refDoc= doc(porductosCollection, params.detalleId)
    // console.log(params.detalleId)
     getDoc(refDoc)
     .then (resultado =>{
         setProductoCompleto({...resultado.data(), id: resultado.id })
     })

    // promesaDetalle.then((des)=>{
    // setProductoCompleto(des);
   
    // });
   },[]);
   
   
    
    return (
        
        <>
        {
            
       productoCompleto != undefined &&

            <div>
            < ItemListDetail arrayProductoCompleto={productoCompleto} />
        </div>
        }
        </>
        
    )
}
export default ItemDetailContainer