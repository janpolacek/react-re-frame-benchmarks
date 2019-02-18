import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fps-emit';
import './handlers';
import './subs';
import {updateRandomPairInSlice} from './actions';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


setInterval(updateRandomPairInSlice, 13);

setInterval(updateRandomPairInSlice, 21);

setInterval(updateRandomPairInSlice, 34);

setInterval(updateRandomPairInSlice, 55);

