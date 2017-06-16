import { combineReducers } from 'redux'
import axios from 'axios';

// ACTIONS:

const GET_TWEETS = 'GET_TWEETS';

// ACTION CREATORS:

export const getTweets = tweets => ({
    type: GET_TWEETS,
    tweets
});

// REDUCER:

const initialState = {
  lifeTweets: [],
  loveTweets: [],
  careerTweets: []
}

const rootReducer = function(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch(action.type) {

    case GET_TWEETS:
      newState.lifeTweets = action.tweets.data[0];
      newState.loveTweets = action.tweets.data[1];
      newState.careerTweets = action.tweets.data[2];
      break;

    default: return state
  }

  return newState;
};

// DISPATCHERS



export default rootReducer
