import * as reframe from 'nike-re-framejs';
import {defaultMiddlewares} from './middleware';
import Immutable from 'immutable';

reframe.regEventDb('addTweet', defaultMiddlewares,
    (db, [sliceId, tweet]) => {
        return db.updateIn(["slices", sliceId], Immutable.List(), tweets => tweets.push(tweet));
    }
);
