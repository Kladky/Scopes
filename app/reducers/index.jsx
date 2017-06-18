import { combineReducers } from 'redux'
import axios from 'axios';

// ACTIONS:

const GET_TWEETS = 'GET_TWEETS';
const GET_MARKOV = 'GET_MARKOV';

// ACTION CREATORS:

export const getTweets = tweets => ({
    type: GET_TWEETS,
    tweets
});

export const getMarkov = markov => ({
    type: GET_MARKOV,
    markov
});

// REDUCER:

const initialState = {
  lifeTweets: [],
  loveTweets: [],
  careerTweets: [],
  markovLife: [],
  markovLove: [],
  markovCareer: []
}

const rootReducer = function(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch(action.type) {

    case GET_TWEETS:
      newState.lifeTweets = action.tweets.data[0];
      newState.loveTweets = action.tweets.data[1];
      newState.careerTweets = action.tweets.data[2];
      break;

    case GET_MARKOV:
      newState.markovLife = action.markov.data.life;
      newState.markovLove = action.markov.data.love;
      newState.markovCareer = action.markov.data.career;
      break;

    default: return state
  }

  return newState;
};

// DISPATCHERS



export default rootReducer
