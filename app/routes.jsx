import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import { getTweets, getMarkov } from './reducers';

import Root from './components/Root';
import HomeContainer from './containers/HomeContainer';
import MarkovContainer from './containers/MarkovContainer';
import NotFound from './components/NotFound';

export const loadData = () => {
  axios.get('/api/twitter')
  .then(tweets => store.dispatch(getTweets(tweets)))

  axios.get('/api/markov')
  .then(markov => store.dispatch(getMarkov(markov)))
};



export default function App () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Root} onEnter={loadData}>
          <Route path="/twitter" component={HomeContainer}/>
          <Route path="/extended" component={MarkovContainer}/>
          <IndexRedirect to="/extended"/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    </Provider>
  );
}
