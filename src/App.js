import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './Components/Cart/cart';
import CustomProvider from './Context/Contexto';
import Carrito from './Components/Header/Carrito/Carrito';

const App = ()=>{
  return(
    <>
      <BrowserRouter>
        <CustomProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Carté & Design!" />}>
            </Route>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}>
            </Route>
            <Route path="/detalles/:detalleId" element={<ItemDetailContainer/>}>
            </Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
          </Routes>
          <br></br>
          <Footer />
        </CustomProvider>
      </BrowserRouter>
    </> 
  )
}

export default App