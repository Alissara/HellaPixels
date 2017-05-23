import * as APIUtil from '../util/user_api_util';
import * as APIUtilFollows from '../util/follow_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)))
);

export const createFollow = follow => dispatch => (
  APIUtilFollows.createFollow(follow)
    .then(user => dispatch(receiveUser(user)))
);

export const deleteFollow = follow => dispatch => (
  APIUtilFollows.deleteFollow(follow)
    .then(user => dispatch(receiveUser(user)))
);
