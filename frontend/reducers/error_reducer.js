import merge from 'lodash/merge';

import { RECEIVE_ERRORS } from '../actions/session_actions';

const defaultError = Object.freeze({
  signUp: [],
  logIn: [],
  createPhoto: []
});

const ErrorReducer = (state = defaultError, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultError, {errors});
    default:
      return state;
  }
};

export default ErrorReducer;
