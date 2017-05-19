import * as APIUtil from '../util/photo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const fetchPhotos = userid => dispatch => (
  APIUtil.fetchPhotos(userid)
    .then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo)
    .then(
      pht => {
        dispatch(receivePhoto(pht));
        dispatch(clearErrors());
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updatePhoto = photo => dispatch => (
  APIUtil.updatePhoto(photo)
    .then(pht => dispatch(receivePhoto(pht)))
);

export const deletePhoto = id => dispatch => (
  APIUtil.deletePhoto(id)
    .then(photo => dispatch(removePhoto(photo)))
);
