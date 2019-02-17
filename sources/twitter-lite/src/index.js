import React, {unstable_Profiler as Profiler} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fps-emit';
import './handlers';
import './subs';
import { addTweet } from './actions';

const NUMBER_OF_SLICES = 3;


const renderResults = [];
window.renderResults = renderResults;


function onAppRendered(id, phase, actualTime, baseTime, startTime, commitTime, interactions = []) {
    if(!Array.isArray(interactions)) {
        interactions = [...interactions]
    }
    renderResults.push({id, phase, actualTime, baseTime, startTime, commitTime, interactions});
}

ReactDOM.render(
    <Profiler id="appProfiler" onRender={onAppRendered}>
   <App />
    </Profiler>,
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
