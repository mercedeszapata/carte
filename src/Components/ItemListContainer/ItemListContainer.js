import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer=({greeting})=>{
   
    const params = useParams();
    console.log(params.categoryId);

    const descripcionProductos= [
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
 
    const promesa = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(descripcionProductos);
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