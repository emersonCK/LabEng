import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FatecMenu from './FatecMenu';
import FatecBody from './FatecBody';
import FatecFooter from './FatecFooter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FatecMenu />
    <FatecBody />
    <FatecFooter />

  </React.StrictMode>
);

reportWebVitals();
