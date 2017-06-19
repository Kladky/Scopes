import React, { Component } from 'react';

export default function App ({ children }) {
  return (
    <div>
      <h1><i className="em em-star2"></i> Your horoscope, apparently:</h1>
      { children }
    </div>
  )
}
