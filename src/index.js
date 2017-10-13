import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'; //BrowserRouter interacts with the history library and decides what to do based on the change of the URL. Route is the react component tha we can render inside any other react component in the app (if the url looks like this show this components)

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends Component{
  render(){ return <div>Hello</div>}
}

class Goodbye extends Component{
  render(){ return <div>Goodbye</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        Header {/* hardcode the header to all the pages */}
        <Route path="/hello" component={Hello}/> {/* //path(string) and component are the two props we always pass on Route. If the user goes to this route, show this component*/}
        <Route path="/goodbye" component={Goodbye}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
