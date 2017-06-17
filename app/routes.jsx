import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import { getTweets } from './reducers';

import Root from './components/Root';
import HomeContainer from './containers/HomeContainer';
import Markov from './components/Markov';
import NotFound from './components/NotFound';

export const refreshTweets = () => {
  axios.get('/api/twitter')
  .then(tweets => store.dispatch(getTweets(tweets)))
};

export default function App () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Root} onEnter={refreshTweets}>
          <Route path="/twitter" component={HomeContainer}/>
          <Route path="/markov" component={Markov}/>
          <IndexRedirect to="/twitter"/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    </Provider>
  );
}
