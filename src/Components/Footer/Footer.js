import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footer.css';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Text className="textoFooter"> COPYRIGHT CARTÉ & DESIGN - 2022. TODOS LOS DERECHOS RESERVADOS.</Card.Text>
        <Button variant="primary" className="botonFooter">PARA RECLAMOS <span>INGRESE AQUÍ</span></Button>
      </Card.Body>
    </Card>
  );
}

export default Footer;