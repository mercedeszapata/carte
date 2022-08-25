
import React, {useState} from 'react';
import './ItemCount.css';



const Stock =({inicial, total}) =>{
    const [contador, setContador ] = useState(inicial);
    
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
            <button onClick={handlerClick} id="botonSuma">+</button>
                <button id="mensaje">Agregar al carrito</button>
                <button onClick={handlerClickQuitar} id="botonResta">-</button>
            </div>
                
                
            </div>
        
        </>
            
        
        )   
}
export default Stock