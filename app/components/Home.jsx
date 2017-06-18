import React from 'react';
import { Link } from 'react-router';

export default function Home (props) {
    const lifeTweets = props.lifeTweets;
    const loveTweets = props.loveTweets;
    const careerTweets = props.careerTweets;
    const getTweets = props.getTweets;

    const lifeScope = lifeTweets ? lifeTweets[0] : "hmmmmmm try again?"
    const loveScope = loveTweets ? loveTweets[0] : "hmmmmmm try again?"
    const careerScope = careerTweets ? careerTweets[0] : "hmmmmmm try again?"

    return (
      <div>
        <h2><i className="em em-sparkles"></i> Life: </h2>
        <p>{lifeScope}</p>
        <h2><i className="em em-heart_eyes"></i> Love: </h2>
        <p>{loveScope}</p>
        <h2><i className="em em-moneybag"></i> Career: </h2>
        <p>{careerScope}</p>
        <button onClick={getTweets}>New horoscope</button>
        <Link to="/markov"><button className="footer-link">your expanded horoscope</button></Link>
      </div>
    );
}
