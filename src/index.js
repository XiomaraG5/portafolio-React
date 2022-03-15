import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouters } from './AppRouters';

ReactDOM.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>,
  document.getElementById('root')
);