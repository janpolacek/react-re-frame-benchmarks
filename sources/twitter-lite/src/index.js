import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fps-emit';
import './handlers';
import './subs';
import { addTweet } from './actions';

const NUMBER_OF_SLICES = 3;


ReactDOM.render(
   <App />,
  document.getElementById('root')
);

function addTweetInRandomSlice() {
  const sliceId = Math.floor(Math.random() * NUMBER_OF_SLICES);
  addTweet(sliceId);
}

setInterval(addTweetInRandomSlice, 13);

setInterval(addTweetInRandomSlice, 21);

setInterval(addTweetInRandomSlice, 34);

setInterval(addTweetInRandomSlice, 55);
