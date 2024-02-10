// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'components/Router/Router'; // Poprawiony sposób importu
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter /> {/* Użyj AppRouter tutaj */}
  </React.StrictMode>
);
