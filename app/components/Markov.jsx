import React from 'react';
import { Link } from 'react-router';
import shareThis from "share-this";
import * as twitterSharer from "share-this/dist/sharers/twitter";

export default function Markov (props) {
  const lifeMarkov = props.lifeMarkov.join(" ");
  const loveMarkov = props.loveMarkov.join(" ");
  const careerMarkov = props.careerMarkov.join(" ");
  const getMarkov = props.getMarkov;

  const selectionShare = shareThis({
    sharers: [ twitterSharer ]
  });

  selectionShare.init();

  return (
    <div>
      <h2><i className="em em-sparkles"></i> Life: </h2>
      <p>{lifeMarkov}</p>
      <h2><i className="em em-heart_eyes"></i> Love: </h2>
      <p>{loveMarkov}</p>
      <h2><i className="em em-moneybag"></i> Career: </h2>
      <p>{careerMarkov}</p>
      <button onClick={getMarkov}>New extended horoscope</button>
      <Link to="/twitter"><button className="footer-link">Switch to live tweet horoscope</button></Link>
    </div>
  );
}

