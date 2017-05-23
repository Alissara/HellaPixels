//React
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//Components
import configureStore from './store/store';
import Root from './components/root';

//Test
// window.store = configureStore();
// import { login, logout, signup } from './actions/session_actions';
// window.login = login;
// window.logout = logout;
// window.signup = signup;

// import { fetchPhotos,
//          fetchPhoto,
//          createPhoto,
//          updatePhoto,
//          deletePhoto } from './actions/photo_actions';
// window.fetchPhotos = fetchPhotos;
// window.fetchPhoto = fetchPhoto;
// window.createPhoto = createPhoto;
// window.updatePhoto = updatePhoto;
// window.deletePhoto = deletePhoto;

import { fetchUser, updateUser } from './actions/user_actions';
window.fetchUser = fetchUser;
window.updateUser = updateUser;

import { createFollow, deleteFollow } from './actions/user_actions';
window.createFollow = createFollow;
window.deleteFollow = deleteFollow;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Test - remove later
  window.store = store;

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});
