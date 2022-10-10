import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { contexto } from './../../Context/Contexto';
import {db} from '../../firebase/firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';

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
        const porductosCollection= collection(db,'productos');
        if (params.categoryId == undefined){
            getDocs(porductosCollection)
            .then(resultado=>{
                const lista= resultado.docs.map(prod=>{
                    return {
                        id: prod.id,
                        ...prod.data()
                    }
                });
                setProductos(lista);
            });
        }
        else{
            const q= query(porductosCollection, where("categoria", "==", params.categoryId));
            getDocs(q)
            .then(resultado=>{
                const lista=resultado.docs.map(prod=>{
                    return{
                        id: prod.id,
                        ...prod.data()
                    }
                });
                setProductos(lista);
            })
        }
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