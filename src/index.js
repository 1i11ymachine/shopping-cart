import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';

import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
//import Counters from './Components/counters';

//const element = <h1>Hello World!</h1>;
//console.log(element);

//ReactDOM.render(element, document.getElementById('root'));

const element = document.getElementById('root');
const root = createRoot(element);

root.render(<App />);