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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Stock from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';



const App = ()=>{
  return(
    <>
    <Header />
    <ItemListContainer greeting="¡Bienvenido a Carté & Design!" />
    <Stock inicial={1} total={5}/>
    <ItemDetailContainer />
    </>
    
  )

}
export default App