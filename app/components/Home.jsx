import React from 'react';
import { Link } from 'react-router';

export default function Campus (props) {
    const lifeTweets = props.lifeTweets;

    return (
      <div>
        <h2>Life: </h2>
        <p>{lifeTweets[0]}</p>
        <h2>Love: </h2>
        <p>{lifeTweets[1]}</p>
        <h2>Career: </h2>
        <p>{lifeTweets[2]}</p>
      </div>
    );
}
