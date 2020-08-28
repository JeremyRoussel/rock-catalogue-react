import React from 'react';
import ReactDOM from 'react-dom';

// Redux and Thunk Dependencies
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
// import getSamples from './actions/getSamples'

// React-Router-Dom components
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// Import Dashboard for base layout
import App from './App';
import Dashboard from './components/layout/Dashboard'
import MockHome from './components/examples/MockHome'

const store=configureStore();
// store.dispatch(getSamples())


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Dashboard>
        <Switch>
          <Route exact path="/" component={ App } />
          <Route exact path="/mockhome" component={ MockHome } />

        


          <Route component={ MockHome } />
        </Switch>
      </Dashboard>
    </BrowserRouter>
  </Provider >
  
  ,   document.getElementById('root')

);
