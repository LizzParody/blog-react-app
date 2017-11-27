import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'; //BrowserRouter interacts with the history library and decides what to do based on the change of the URL. Route is the react component tha we can render inside any other react component in the app (if the url looks like this show this components)
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore); //pass promise imported from redux-promise as argument

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
