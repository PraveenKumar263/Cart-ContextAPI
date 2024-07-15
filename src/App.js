import React from 'react';
import { Route, Routes } from 'react-router-dom';
import productsData from './Data/products.json';
import { ButtonAppBar } from './components/AppBar';
import { CartProvider } from './components/CartContext';
import { CartPage } from './components/CartPage.js';
import { ProductsList } from './components/ProductsList';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <ButtonAppBar />
        <Routes>
          <Route path="/" exact element={<ProductsList products={productsData.products} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
