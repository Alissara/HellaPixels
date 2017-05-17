//React
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//Components
import configureStore from './store/store';
import Root from './components/root';

//Test
// import * as APIUtil from './util/session_api_util';
// import { login, logout, signup } from './actions/session_actions';
// window.store = configureStore();
// window.APIUtil = APIUtil;
// window.login = login;
// window.logout = logout;
// window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});
