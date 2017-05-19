const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h1>DAVO MIA</h1>
    <button onClick={() => alert("Filip voli Miu")}>Klikni me</button>
  </div>,
  document.getElementById('root')
);