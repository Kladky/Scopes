import React, { Component } from 'react';
import Markov from '../components/Markov';
import { connect } from 'react-redux';
import { getMarkov } from '../reducers';
import axios from 'axios';
import store from '../store';

const mapStateToProps = (state) => {
  return {
    lifeMarkov: state.markovLife,
    loveMarkov: state.markovLove,
    careerMarkov: state.markovCareer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMarkov () {
      axios.get('/api/markov')
      .then(markov => store.dispatch(getMarkov(markov)))
    }
  };
};

class MarkovContainer extends Component {

  constructor(props) {
    super(props);
    // this.state = {

    // };
  }

  componentWillReceiveProps (newProps, oldProps) {
    console.log("THE NEWEST PROPS: ",newProps);
    // this.setState({

    // });
  }

  render () {

    return (
      <Markov
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkovContainer);
