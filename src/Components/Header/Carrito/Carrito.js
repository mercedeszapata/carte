import React, {useContext} from 'react';
import './Carrito.css';
import {contexto} from '../../../Context/Contexto';
import Form from 'react-bootstrap/Form';
import {db} from '../../../firebase/firebase';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2/dist/sweetalert2.all';

const Carrito= ()=>{
  const {vaciarCarrito}=useContext(contexto);
  const { carritoCompra,acum, actualizacionDatos }= useContext(contexto);
  const ventasCollection= collection(db, 'ventas');
  const datosComprador=(e)=>{
    e.preventDefault();
    const objetocompleto = {
      email: e.target[0].value,
      nombre: e.target[1].value,
      compra: carritoCompra,
      date: serverTimestamp(),
      total: acum
    }
    addDoc(ventasCollection,objetocompleto).then(res => console.log(res.id));
  }
  const MostrarAlerta =()=>{
    actualizacionDatos();
      Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'COMPRA REALIZADA CON ÉXITO',
      showConfirmButton: false,
      timer: 1500
    }); 
    vaciarCarrito();
  };
  
  return (
    <div className="contacto">
      <Form onSubmit={datosComprador}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>NOMBRE Y APELLIDO</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit" className="botonComprar">
          GUARDAR
        </Button>
        <Button onClick={()=>MostrarAlerta()} className="botonComprar">FINALIZAR COMPRA</Button>
      </Form>
    </div>
  )
}

export default Carrito