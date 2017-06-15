import React from 'react';
import { Link } from 'react-router';

export default function Campus (props) {
    const lifeTweets = props.lifeTweets;

    return (
      <div>
        <p>{lifeTweets[0]}</p>
        <p>{lifeTweets[1]}</p>
        <p>{lifeTweets[2]}</p>
      </div>
    );
}
