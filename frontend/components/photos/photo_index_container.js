import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { selectUserPhotos } from '../../reducers/selectors';
import { fetchPhotos,
         updatePhoto,
         deletePhoto } from '../../actions/photo_actions';
import { fetchUser,
         updateUser,
         createFollow,
         deleteFollow } from '../../actions/user_actions';

const mapStateToProps = (state, myProps) => {
  const userId = parseInt(myProps.match.params.userId);
  const currentUserId = state.session.currentUser.id;
  return {
    photos: selectUserPhotos(state),
    userId: userId,
    currentUserId: currentUserId,
    isCurrentUser: Boolean(userId === currentUserId),
    user: state.user,
    followers: state.user.followers,
    followings: state.user.followings
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (userid) => dispatch(fetchPhotos(userid)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (user) => dispatch(updateUser(user)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
