import merge from 'lodash/merge';
import { RECEIVE_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO } from '../actions/photo_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      const newPhoto = {[action.photo.id]: action.photo};
      const photo = {photo: action.photo.id};
      return merge({}, state, newPhoto, photo);
    case REMOVE_PHOTO:
      nextState = merge({}, state);
      delete nextState[action.photo.id];
      delete nextState['photo'];
      return nextState;
    default:
      return state;
  }
};

export default PhotosReducer;

// Sample State Shape
//
// photos: {
//   1: {
//     id: 1,
//     url: "/photo/url",
//     title: "Photo title",
//     description: "Photo description",
//     user_id: 1,
//   },
//   photo: 1
// }
