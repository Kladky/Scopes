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
  lifeTweets: []
}

const rootReducer = function(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch(action.type) {

    case GET_TWEETS:
      newState.lifeTweets = action.tweets.data;
      break;

    default: return state
  }

  return newState;
};

// DISPATCHERS



export default rootReducer
