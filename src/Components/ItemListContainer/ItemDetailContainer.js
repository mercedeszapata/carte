import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ItemListDetail from './ItemListDetail';
import { contexto } from './../../Context/Contexto';
import {db} from '../../firebase/firebase';
import {doc, getDoc, collection} from 'firebase/firestore';

const ItemDetailContainer=()=>{
    const params = useParams();
    const {}= useContext(contexto);
    const [productoCompleto, setProductoCompleto]= useState ([]);
    useEffect(()=>{
        const porductosCollection = collection (db, 'productos');
        const refDoc= doc(porductosCollection, params.detalleId)
        getDoc(refDoc)
        .then (resultado =>{
            setProductoCompleto({...resultado.data(), id: resultado.id })
        })
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