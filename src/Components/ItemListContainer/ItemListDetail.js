import React from 'react';
import CardItemCompleto from './ItemDetail';





const ItemListDetail =({arrayProductoCompleto})=>{

    return(
        <div id="cardProductoCompleto">

            
                <CardItemCompleto nombre={arrayProductoCompleto.nombre} id={arrayProductoCompleto.id} descripcion={arrayProductoCompleto.descripcion} imagen={arrayProductoCompleto.imagen} />
            
        </div>
    );
}
export default ItemListDetail;