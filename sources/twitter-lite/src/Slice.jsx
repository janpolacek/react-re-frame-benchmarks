import React from 'react';
import * as reframe from 'nike-re-framejs';
import TwitterLite from './TwitterLite';

function SliceHook({idx}) {
        const tweetIds = reframe.useReframe()(['tweet_ids', idx]);
        return (
            <ul className='list-group'>
                {tweetIds.map((tweetId) => {
                    return (
                        <TwitterLite sliceId={idx} tweetId={tweetId} />
                    )
                })}
            </ul>
        );
}
const SliceNonHook = reframe.uix('Slice', {
    render({idx}) {
        const tweetIds = this.derefSub(['tweet_ids', idx]);
        return (
            <ul className='list-group'>
                {tweetIds.map((tweetId) => {
                    return (
                        <TwitterLite sliceId={idx} tweetId={tweetId} />
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
