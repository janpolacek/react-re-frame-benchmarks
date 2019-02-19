import React from 'react';
import * as reframe from 'nike-re-framejs';

function TwitterLiteHook ({sliceId, tweetId}) {
  const tweet = reframe.useReframe()(['tweet', sliceId, tweetId]);
  return <div>barfoo</div>;
}


const TwitterLiteNonHook = reframe.uix('TwitterLite', {
  render({sliceId, tweetId}) {
    const tweet = this.derefSub(['tweet', sliceId, tweetId]);
    return <div>barfoo</div>;
  }
});

const TwitterLite = (props) => {
  if (reframe.enableExperimentalFasterSubscribe) {
    return <TwitterLiteHook {...props}/>;
  } else {
    return <TwitterLiteNonHook {...props}/>;
  }
};


export default TwitterLite;
