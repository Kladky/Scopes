import React from 'react';
import { Link } from 'react-router';

export default function Campus (props) {
    const lifeTweets = props.lifeTweets;
    const loveTweets = props.loveTweets;
    const careerTweets = props.careerTweets;

    return (
      <div>
        <h2>Life: </h2>
        <p>{lifeTweets[0]}</p>
        <h2>Love: </h2>
        <p>{loveTweets[0]}</p>
        <h2>Career: </h2>
        <p>{careerTweets[0]}</p>
      </div>
    );
}
