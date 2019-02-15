import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fps-emit'

import * as c from './constants';
import { updatePair, updateRandomPairInSlice } from './pairActions';

import {Provider} from "react-redux";

import configureStore from "./configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

/*
function updateRandomPairInSlice() {
    const sliceId = Math.floor(Math.random() * c.NUMBER_OF_SLICES);
    const pairId = Math.floor(Math.random() * (c.NUM_ENTRIES / c.NUMBER_OF_SLICES));
    store.dispatch(updatePair(sliceId, pairId));
}
*/
function doRandomUpdate() {
  store.dispatch(updateRandomPairInSlice());
}

//setInterval(updateRandomPairInSlice, 500);


setInterval(doRandomUpdate, 13)

setInterval(doRandomUpdate, 21)

setInterval(doRandomUpdate, 34)

setInterval(doRandomUpdate, 55)

