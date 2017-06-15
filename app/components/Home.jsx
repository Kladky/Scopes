import React from 'react';
import { Link } from 'react-router';

export default function Campus (props) {
    const lifeTweets = props.lifeTweets;

    return (
      <div>
        <h2><i className="em em-sparkles"></i> Life: </h2>
        <p>{lifeTweets[0]}</p>
        <h2><i className="em em-heart_eyes"></i> Love: </h2>
        <p>{lifeTweets[1]}</p>
        <h2><i className="em em-moneybag"></i> Career: </h2>
        <p>{lifeTweets[2]}</p>
      </div>
    );
}
