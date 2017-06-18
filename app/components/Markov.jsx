import React from 'react';
import { Link } from 'react-router';

export default function Markov (props) {
  const lifeMarkov = props.lifeMarkov.join(" ");
  const loveMarkov = props.loveMarkov.join(" ");
  const careerMarkov = props.careerMarkov.join(" ");
  const getMarkov = props.getMarkov;

  return (
    <div>
      <h2><i className="em em-sparkles"></i> Life: </h2>
      <p>{lifeMarkov}</p>
      <h2><i className="em em-heart_eyes"></i> Love: </h2>
      <p>{loveMarkov}</p>
      <h2><i className="em em-moneybag"></i> Career: </h2>
      <p>{careerMarkov}</p>
      <button onClick={getMarkov}>New extended horoscope</button>
      <Link to="/twitter"><button className="footer-link">Live tweet horoscope</button></Link>
    </div>
  );
}

