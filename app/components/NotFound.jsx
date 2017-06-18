import React from 'react';
import { Link } from 'react-router';

export default function WrongPage (props) {
    return (
      <div className="error-container">
      <h1>????????????????</h1>
      <p>page not found!</p>
      <img src="/404.gif" />
      <p><Link to="/">Go Home</Link></p>
      </div>
    );
}
