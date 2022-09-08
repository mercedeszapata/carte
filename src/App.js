// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './Components/Cart/cart';



const App = ()=>{
 
  return(
    <>
    <BrowserRouter>
    <Header />
    <Routes>

      <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Carté & Design!" />}>
      </Route>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}>
      </Route>
      <Route path="/detalles/:detalleId" element={<ItemDetailContainer/>}>
      </Route>
      <Route path="/cart" element={<Cart />}></Route>
      

    </Routes>
     
   
    
{/* <ItemListContainer greeting="¡Bienvenido a Carté & Design!" handleProduct={handleProduct}/> 
    <Stock inicial={1} total={5}/>
    {
      producto !==""? <ItemDetailContainer producto={producto} />:""
    } */}
    </BrowserRouter>

    
    </> 
    
  )

}
export default App