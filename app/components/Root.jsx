import React, { Component } from 'react';
import HomeContainer from '../containers/HomeContainer';

export default class WinterJokes extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    //this.nextJoke()
  }

  nextJoke() {
    this.setState({
      // joke: randomJoke(),
      // answered: false,
    })
  }

  answer() {
    //this.setState({answered: true})
  }

  render() {
    //if (!this.state) { return null }

    return (
      <div>
        <h1>Your horoscope, apparently:</h1>
        <HomeContainer />
      </div>
    )
  }
}
