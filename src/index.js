//All the routes are placed in this file
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //Switch component fix the bug of the root url, when the index component is render in all the components because it start with "/"
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore); //pass promise imported from redux-promise as argument

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch> {/* The switch will look at all the routes and render only the first route that matches the url, so the most specific routes goes on the top */}
        <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
