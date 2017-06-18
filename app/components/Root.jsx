import React, { Component } from 'react';

export default function App ({ children }) {
  return (
    <div>
      <h1><i className="em em-crystal_ball"></i> Your horoscope, apparently:</h1>
      { children }
    </div>
  )
}
