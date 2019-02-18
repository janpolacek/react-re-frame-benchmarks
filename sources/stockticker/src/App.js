import React from 'react';
import Slice from "./Slice";
import {updateRandomPairInSlice} from "./actions";
let slices = [0, 1, 2, 3];

class App extends React.Component {
    render () {
        return (
            <div>
                <button onClick={updateRandomPairInSlice}>Update Random Pair</button>
                <div className='row'>
                    {
                        slices.map((v, idx) => {
                            return (
                                <div className='col-lg-4' key={idx}>
                                    <Slice idx={idx} />
                                </div>
                            )
                        })}
                </div>
            </div>

        )
    }
}
App.displayName = "App";

export default App;
