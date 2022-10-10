import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Stock from '../ItemCount/ItemCount';
import {contexto} from '../../Context/Contexto';

const CardItemCompleto =({id, nombre, descripcion, imagen, stock, precio})=>{
    const {}= useContext(contexto);
    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen}/>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        <Card.Text>{id}</Card.Text>
                        <Card.Text>${precio}</Card.Text>
                        <Stock inicial={1} total={stock} nombre={nombre} id={id} precio={precio}/>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default CardItemCompleto;