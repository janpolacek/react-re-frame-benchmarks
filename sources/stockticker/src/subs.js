import * as reframe from 'nike-re-framejs';
import Immutable from 'immutable';

reframe.regSub('slice', (db, [_, sliceId]) => db.getIn(["slices", sliceId], Immutable.Map()));

reframe.regSub('pair_ids',
    ([_, sliceId, ]) => [reframe.subscribe(['slice', sliceId])],
    ([slices]) => slices.keySeq()
);

reframe.regSub('pair', (db, [_, sliceId, pairId]) => db.getIn(["slices", sliceId, pairId]));
