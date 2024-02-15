import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'components/Router/Router';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
