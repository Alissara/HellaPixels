import merge from 'lodash/merge';

import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const defaultError = Object.freeze({
  authForm: [],
  createPhoto: []
});

const ErrorReducer = (state = defaultError, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultError, errors);
    case CLEAR_ERRORS:
      return defaultError;
    default:
      return state;
  }
};

export default ErrorReducer;
