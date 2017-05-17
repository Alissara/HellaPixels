//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';

//Test
import * as APIUtil from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
window.store = configureStore();
window.APIUtil = APIUtil;
window.login = login;
window.logout = logout;
window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
