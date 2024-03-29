import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './main.css';
import H5PViewerComponent from './H5PViewerComponent';

ReactDOM.render(
  <React.StrictMode>
    <H5PViewerComponent h5pUrl="http://localhost:8080" />
  </React.StrictMode>,
  document.getElementById('root')
);
