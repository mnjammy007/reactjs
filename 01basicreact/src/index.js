import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
 // StrictMode is a tool for highlighting potential problems in an application
 // App will still work if we comment out the React.StrictMode code
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);