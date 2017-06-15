import React, { Component } from 'react';

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
        <h1>Some text or whatever</h1>
      </div>
    )
  }
}
