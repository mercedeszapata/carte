import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import CardItem from './Item.js';
import ItemList from './ItemList';


const ItemListContainer=({greeting})=>{
    
    const descripcionProductos= [
        {imagen:'https://i.ibb.co/LtVQZf2/Recurso-1.png', nombre:'Producto 1', descripcion: 'texto informativo',precio:'$',id:'1'},
        {imagen:'https://i.ibb.co/LtVQZf2/Recurso-1.png', nombre:'Producto 2', descripcion: 'texto informativo',precio:'$', id:'2'},
        {imagen:'https://i.ibb.co/LtVQZf2/Recurso-1.png', nombre:'Producto 3', descripcion: 'texto informativo',precio:'$', id:'3'},
    ];

    const promesa = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(descripcionProductos);
            rej ('Error');
        },2000);
    });

    const [productos, setProductos]= useState ([]);

   useEffect(()=>{
    promesa.then((des)=>{
    setProductos(des);
    });
   },[]);
   

    
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