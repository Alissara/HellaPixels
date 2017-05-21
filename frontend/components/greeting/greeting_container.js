import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { createPhoto } from '../../actions/photo_actions';
import { clearErrors } from '../../actions/error_actions';
import Greeting from './greeting';

import { selectUserPhotos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.createPhoto,
  photos: selectUserPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createPhoto: photo => dispatch(createPhoto(photo)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
