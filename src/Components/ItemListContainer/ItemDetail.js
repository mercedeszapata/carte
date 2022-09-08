import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardItemCompleto =({id, nombre, descripcion, imagen})=>{
    
    
    return (
        <>

        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>{id}</Card.Text>
                <Button variant="primary">COMPRAR</Button>
            </Card.Body>
            </Card>
            
    
        </div>
               </>
        
      );
}





export default CardItemCompleto;