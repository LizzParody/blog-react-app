import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'; //BrowserRouter interacts with the history library and decides what to do based on the change of the URL. Route is the react component tha we can render inside any other react component in the app (if the url looks like this show this components)
//we deleted the App component because now that we have the router we don't have a central single component going on
import reducers from './reducers';
import PostIndex from './components/post_index'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
