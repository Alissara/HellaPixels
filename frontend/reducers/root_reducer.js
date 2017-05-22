import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import PhotosReducer from './photo_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  photos: PhotosReducer,
  user: UserReducer
});

export default RootReducer;
