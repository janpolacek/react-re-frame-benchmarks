import * as reframe from 'nike-re-framejs';
import Chance from 'chance'
import Immutable from 'immutable';

const chance = new Chance();
const NUMBER_OF_SLICES = 4;
const NUM_ENTRIES = 3500;

function createPairs () {
    let pairs = Immutable.Map();
    const entries = Math.floor(NUM_ENTRIES / NUMBER_OF_SLICES);
    for (let i = 0; i < entries; i++) {
        const id = String(i);
        const pair = chance.currency_pair();
        pairs = pairs.set(id, Immutable.fromJS({
            id: id,
            value: Math.random(),
            name: pair[0].code + pair[1].code
        }))
    }
    return pairs
}

export function fillPairs (slideId) {
    reframe.dispatch(['fill-pairs', slideId, createPairs()])
}

export function updateRandomPairInSlice() {
    const pairId = String(Math.floor(Math.random() * (NUM_ENTRIES / NUMBER_OF_SLICES)));
    const sliceId = Math.floor(Math.random() * NUMBER_OF_SLICES);
    reframe.dispatch(['update-pair', sliceId, pairId, Math.random()])
}
