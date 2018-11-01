import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as singleSpa from 'single-spa';
import App from './App';

singleSpa.start();

ReactDOM.render(<App />, document.getElementById('root'));
