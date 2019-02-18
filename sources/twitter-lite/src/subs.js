import * as reframe from 'nike-re-framejs';
import Immutable from 'immutable';

reframe.regSub('slice', (db, [_, sliceId]) => db.getIn(["slices", sliceId], Immutable.Map()));

reframe.regSub('tweet_ids',
    ([_, sliceId, ]) => [reframe.subscribe(['slice', sliceId])],
    ([slices]) => slices.keySeq()
);

reframe.regSub('tweet', (db, [_, sliceId, tweetId]) => db.getIn(["slices", sliceId, tweetId]));
