import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { createPhoto } from '../../actions/photo_actions';
import { clearErrors } from '../../actions/error_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors: errors.createPhoto
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
