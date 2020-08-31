// index.js

import React from 'react';
import ReactDOM from 'react-dom';

// Redux and Thunk Dependencies
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import getCatalogue from './actions/getCatalogue'

// React-Router-Dom components
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// Import Dashboard for base layout
import App from './App';
import Dashboard from './components/layout/Dashboard'
import MockHome from './components/examples/MockHome'
import Catalogue from './components/Catalogue'

const store=configureStore();
store.dispatch(getCatalogue())


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Dashboard>
        <Switch>
          <Route exact path="/" component={ Catalogue } />
          <Route exact path="/mockhome" component={ MockHome } />

          <Route component={ App } />
        </Switch>
      </Dashboard>
    </BrowserRouter>
  </Provider >
  
  ,   document.getElementById('root')

);
