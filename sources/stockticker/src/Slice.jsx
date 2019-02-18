import React from 'react';
import Pair from "./Pair";
import { fillPairs } from "./actions";
import * as reframe from 'nike-re-framejs';

const Slice = reframe.uix('Slice', {
    componentDidMount() {
        fillPairs(this.props.idx);
    },
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

export default Slice;
