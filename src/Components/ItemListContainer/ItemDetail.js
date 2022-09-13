import React from 'react';
import Card from 'react-bootstrap/Card';
import Stock from '../ItemCount/ItemCount';



const CardItemCompleto =({id, nombre, descripcion, imagen, stock})=>{
    
   
    return (
        <>

        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>{id}</Card.Text>
                {/* <Button variant="primary">COMPRAR</Button> */}
                           <Stock inicial={1} total={stock} nombre={nombre} id={id}/>
               
            </Card.Body>
            
            </Card>
            
    
        </div>
               </>
        
      );
}





export default CardItemCompleto;