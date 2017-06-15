import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import { getTweets } from './reducers';

import Root from './components/Root';

const onAppEnter = () => {
  axios.get('/api/twitter')
  .then(tweets => store.dispatch(getTweets(tweets)))
};

export default function App () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Root} onEnter={onAppEnter}>
        </Route>
      </Router>
    </Provider>
  );
}
