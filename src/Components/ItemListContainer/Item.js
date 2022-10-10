import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
import { NavLink } from 'react-router-dom';
import {contexto} from '../../Context/Contexto';

const CardItem =({detalles})=>{
    const {} = useContext(contexto);
    return (
        <>
            <div >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={detalles.imagen}/>
                    <Card.Body>
                        <Card.Title>{detalles.nombre}</Card.Title>
                        <NavLink to={`/detalles/${detalles.id}`}>
                            <Button variant="primary" className="botonComprar">MÁS INFORMACIÓN</Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default CardItem;