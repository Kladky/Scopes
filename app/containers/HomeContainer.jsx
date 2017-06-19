import React, { Component } from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';
import { getTweets } from '../reducers';
import { refreshTweets } from '../routes';
import axios from 'axios';
import store from '../store';

const mapStateToProps = (state) => {
  return {
    lifeTweets: state.lifeTweets,
    loveTweets: state.loveTweets,
    careerTweets: state.careerTweets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTweets () {
      axios.get('/api/twitter')
      .then(tweets => store.dispatch(getTweets(tweets)))
    }
  };
};

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    // this.state = {

    // };
  }

  componentWillReceiveProps (newProps, oldProps) {

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
