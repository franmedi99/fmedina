import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación a 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea la raíz usando createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);