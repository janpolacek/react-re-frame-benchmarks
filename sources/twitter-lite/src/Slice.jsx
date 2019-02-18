import React from 'react';
import * as reframe from 'nike-re-framejs';
import TwitterLite from './TwitterLite';

const Slice = reframe.uix('Slice', {
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

export default Slice;
