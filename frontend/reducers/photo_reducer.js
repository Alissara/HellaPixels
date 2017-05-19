import merge from 'lodash/merge';
import { RECEIVE_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO } from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_PHOTOS:
      nextState = {};
      action.photos.forEach(photo => nextState[photo.id] = photo);
      return nextState;
    case RECEIVE_PHOTO:
      const newPhoto = {[action.photo.id]: action.photo};
      return merge({}, state, newPhoto);
    case REMOVE_PHOTO:
      nextState = merge({}, state);
      delete nextState[action.photo.id];
      return nextState;
    default:
      return state;
  }
};

export default photosReducer;

// Sample State Shape
// photos: {
//   1: {
//     id: 1,
//     url: "/photo/url".
//     title: "Photo title",
//     description: "Photo description",
//     user_id: 1,
//   },
//   photo: 1
// }
