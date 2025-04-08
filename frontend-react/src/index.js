import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//  Importa o provider do carrinho
import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
