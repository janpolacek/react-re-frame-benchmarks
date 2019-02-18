import * as reframe from 'nike-re-framejs';
import Immutable from 'immutable';

export function addTweet(id) {
    reframe.dispatch(['addTweet', id, Immutable.fromJS({tweet: 'fabulous'})])
}
