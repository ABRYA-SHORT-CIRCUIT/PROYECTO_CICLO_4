import React from 'react';
import ReactDOM from 'react-dom/client';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App';

//Para la alerta
const options = {

  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',

  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>

  </React.StrictMode>
);

