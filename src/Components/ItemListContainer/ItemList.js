import React from 'react';
import CardItem from './Item';




const ItemList =({arrayProductos})=>{

    return(
        <div id="cardsProductos">
        {arrayProductos.map((prod,i)=>{
          return(
<CardItem key={i} detalles={prod} />
          )
        })}
        </div>
    );
}
export default ItemList;