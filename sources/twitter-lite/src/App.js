import React from 'react';
import Slice from './Slice';
import './App.css';
const slices = [0, 1, 2];

class App extends React.Component {
    render() {
        return (
            <div className='row'>
                {
                    slices.map(sliceId => {
                        return (
                            <div className='col-lg-4' key={sliceId}>
                                <Slice idx={sliceId} />
                            </div>
                        )
                    })}
            </div>
        );
    }
}

export default App;
