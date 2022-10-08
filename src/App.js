
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Cart } from './components/Cart/Cart';

import { Navegador } from '../src/components/navbar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from '../src/components/Checkout/Checkout';

import { CartProvider } from './components/CartContext/CartContext'; 
import { LoginProvider } from './components/LoginContext/LoginContext';
import LoginScreen from './components/LoginScreen/LoginScreen';


const App = () => {
  return (
    <LoginProvider>
    <CartProvider>
      <BrowserRouter>
        <Navegador></Navegador>
        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/Checkout'   element = {<Checkout />} />
        

        </Routes>




      </BrowserRouter>



    </CartProvider>
    </LoginProvider>

  );
}

export default App;
