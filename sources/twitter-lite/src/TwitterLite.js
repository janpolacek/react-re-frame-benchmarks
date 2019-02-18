import React from 'react';
import * as reframe from 'nike-re-framejs';

const TwitterLite = reframe.uix('TwitterLite', {
  render({sliceId, tweetId}) {
    const tweet = this.derefSub(['tweet', sliceId, tweetId]);
    return <div>barfoo</div>;
  }
});

export default TwitterLite;
