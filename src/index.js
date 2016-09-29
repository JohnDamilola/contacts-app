import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './store';
//import Main from './components/main.js';

import App from './app.js';

import './styles/index2.css';
import './styles/bootstrap.css';
import './styles/Animate.css';
import './styles/materialdesignicons.min.css';
import './styles/font-awesome.css';
import './icon100x100.png';

import IndexPage from './components/index.js';
// import users from './data/users.js';

const root = document.getElementById('root');
const router = ( 
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage}></IndexRoute>
      </Route>
    </Router>
  </Provider>
);
ReactDOM.render(router, root);