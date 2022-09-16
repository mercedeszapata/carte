import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { contexto } from './../../Context/Contexto';


const ItemListContainer=({greeting})=>{
   
    const params = useParams();
    const { prod }= useContext(contexto);

    
 
    const promesa = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(prod);
            rej ('Error');
        },10);
    });

    const [productos, setProductos]= useState ([]);

   useEffect(()=>{
    promesa.then((des)=>{
        const filtrado = des.filter(it=>it.categoria== params.categoryId);
        if(filtrado.length > 0){
            

            setProductos(filtrado);
        }
        else{
            setProductos(des);
        }
    });
   },[params]);
   
    return (
        <>
        <div className="landing">
            <span>{greeting}</span>
        </div>
        <div>
            < ItemList arrayProductos={productos} />
        </div>
        </>
        
    )
}
export default ItemListContainer