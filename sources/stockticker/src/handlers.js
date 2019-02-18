import * as reframe from 'nike-re-framejs';
import {defaultMiddlewares} from './middleware';

reframe.regEventDb('fill-pairs', defaultMiddlewares,
    (db, [sliceId, values]) => {
        return db.setIn(["slices", sliceId], values);
    }
);
reframe.regEventDb('update-pair', defaultMiddlewares,
    (db, [sliceId, pairId, value]) => {
        return db.setIn(["slices", sliceId, pairId, "value"], value);
    }
);
