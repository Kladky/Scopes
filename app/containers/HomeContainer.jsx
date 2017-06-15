import React, { Component } from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    lifeTweets: state.lifeTweets
  };
};

const mapDispatchToProps = (dispatch) => {

};

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    // this.state = {

    // };
  }

  render () {

    return (
      <Home
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
