import { values } from 'lodash';

export const selectUserPhotos = ({ photos }) => {
  // delete photos['photo'];
  return values(photos);
};
