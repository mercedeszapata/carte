import React from 'react';
import CardItemCompleto from './ItemDetail';





const ItemListDetail =({arrayProductoCompleto})=>{
console.log("arratprodcompl",arrayProductoCompleto)
    return(
        <div id="cardProductoCompleto">

            
                <CardItemCompleto nombre={arrayProductoCompleto.nombre} id={arrayProductoCompleto.id} descripcion={arrayProductoCompleto.descripcion} imagen={arrayProductoCompleto.imagen} stock={arrayProductoCompleto.stock} precio={arrayProductoCompleto.precio} />
            
        </div>
    );
}
export default ItemListDetail;