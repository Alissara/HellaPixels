import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { selectUserPhotos } from '../../reducers/selectors';
import { fetchPhotos,
         updatePhoto,
         deletePhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, myProps) => {
  const userId = parseInt(myProps.match.params.userId);
  const currentUserId = state.session.currentUser.id;
  return {
    photos: selectUserPhotos(state),
    userId: userId,
    isCurrentUser: Boolean(userId === currentUserId)
    // username:
    // userimg:
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (userid) => dispatch(fetchPhotos(userid)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
