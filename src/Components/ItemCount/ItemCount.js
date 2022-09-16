
import React, {useState, useContext} from 'react';
import './ItemCount.css';
import { NavLink } from 'react-router-dom';
import { contexto } from '../../Context/Contexto';




const Stock =({inicial, total, nombre, id, precio}) =>{
    const [contador, setContador ] = useState(inicial);
   
    const { agregarProducto }= useContext(contexto);
    
  
    const handlerClick=()=>{
        
    if( contador < total){
        setContador (contador + 1);
    }
    }


    const handlerClickQuitar=()=>{
        if (contador>0){
            setContador (contador - 1); 
        }
        
    }
        return(
        <>
       
            <div id="cajaContador"> 
            <div id="contadorInicial">
            <h1>{contador}</h1>
            </div>
            <div>
            <button  onClick={handlerClickQuitar} id="botonResta">-</button>
              <NavLink to={`/cart`}>
                <button onClick={()=> agregarProducto({nombre:nombre, id:id, cantidad:contador, precio:precio })} variant="primary" id="mensaje">AGREGAR AL CARRITO</button> 
            </NavLink>
                 <button onClick={handlerClick} id="botonSuma">+</button>
                 
            </div>
                
            </div>
        
        </>
            
        
        )   
}
export default Stock