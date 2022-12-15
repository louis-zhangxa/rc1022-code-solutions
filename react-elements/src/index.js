import React from 'react';
import * as ReactDOM from 'react-dom/client';

const newE = React.createElement(
  'h1', null, 'Hello, React!'
);

console.log(newE);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(newE);
