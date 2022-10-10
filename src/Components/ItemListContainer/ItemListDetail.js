import React from 'react';
import CardItemCompleto from './ItemDetail';

const ItemListDetail =({arrayProductoCompleto})=>{
    return(
        <div  className='cajaCard'>
                <CardItemCompleto nombre={arrayProductoCompleto.nombre} id={arrayProductoCompleto.id} descripcion={arrayProductoCompleto.descripcion} imagen={arrayProductoCompleto.imagen} stock={arrayProductoCompleto.stock} precio={arrayProductoCompleto.precio} />
        </div>
    );
}

export default ItemListDetail;