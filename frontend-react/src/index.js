import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ErrorProvider } from './Context/ErrorContext';

//  Importa o provider do carrinho
import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ErrorProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ErrorProvider>
  </React.StrictMode>
);
