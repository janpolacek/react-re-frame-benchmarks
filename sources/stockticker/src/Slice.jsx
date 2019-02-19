import React from 'react';
import Pair from "./Pair";
import * as reframe from 'nike-re-framejs';

function SliceHook({idx}){
    const pair_ids = reframe.useReframe()(['pair_ids', idx]);
    return (
        <ul className='list-group'>
            {pair_ids.map((id) => {
                return (
                    <Pair key={id} sliceId={idx} pairId={id} />
                )
            })}
        </ul>
    );

}

const SliceNonHook = reframe.uix('Slice', {
    render() {
        const {idx} = this.props;
        const pair_ids = this.derefSub(['pair_ids', idx]);
        return (
            <ul className='list-group'>
                {pair_ids.map((id) => {
                    return (
                        <Pair key={id} sliceId={idx} pairId={id} />
                    )
                })}
            </ul>
        );
    }
});

const Slice = (props) => {
    if (reframe.enableExperimentalFasterSubscribe) {
        return <SliceHook {...props}/>;
    } else {
        return <SliceNonHook {...props}/>;
    }
};


export default Slice;
