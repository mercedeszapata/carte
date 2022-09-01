import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';

const CardItem =({detalles})=>{
    
    return (
        <>

        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={detalles.imagen}/>
            <Card.Body>
                <Card.Title>{detalles.nombre}</Card.Title>
                
                <Button variant="primary">MÁS INFORMACIÓN</Button>
            </Card.Body>
            </Card>
            
    
        </div>
        <div>


            
        </div>


        </>
        
      );
}





export default CardItem;