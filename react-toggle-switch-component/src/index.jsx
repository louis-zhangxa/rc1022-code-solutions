import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from './toggle-switch';

const $container = document.querySelector('#root');
const root = ReactDOM.createRoot($container);

root.render(<Toggle />);
