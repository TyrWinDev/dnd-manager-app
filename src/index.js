import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Use createRoot instead of render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
