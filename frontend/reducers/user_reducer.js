import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const defaultUser = {
  username: "",
  bio: "",
  cover_url: "",
  profile_url: "",
  followers: [],
  followings: []
};

const UserReducer = (state = defaultUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    default:
      return state;
  }
};

export default UserReducer;
