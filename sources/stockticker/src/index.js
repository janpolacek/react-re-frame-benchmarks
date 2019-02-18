import React, {unstable_Profiler as Profiler} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fps-emit'
import './handlers';
import './subs';
import {updateRandomPairInSlice} from './actions';


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


setInterval(updateRandomPairInSlice, 13);

setInterval(updateRandomPairInSlice, 21);

setInterval(updateRandomPairInSlice, 34);

setInterval(updateRandomPairInSlice, 55);

