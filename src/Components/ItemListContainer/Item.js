import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
import { NavLink } from 'react-router-dom';

const CardItem =({detalles})=>{
    
    return (
        <>

        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={detalles.imagen}/>
            <Card.Body>
                <Card.Title>{detalles.nombre}</Card.Title>
                <NavLink to="/detalles/">
                    <Button variant="primary">MÁS INFORMACIÓN</Button>
                </NavLink>
                
            </Card.Body>
            </Card>
            
    
        </div>
        <div>


            
        </div>


        </>
        
      );
}





export default CardItem;