import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors.authForm
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
