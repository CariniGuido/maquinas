
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Cart } from './components/Cart/Cart';

import { Navegador } from '../src/components/navbar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './components/CartContext/CartContext';


const App = () => {
  return (

    <CartProvider>
      <BrowserRouter>
        <Navegador></Navegador>
        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />

        </Routes>




      </BrowserRouter>



    </CartProvider>

  );
}

export default App;
