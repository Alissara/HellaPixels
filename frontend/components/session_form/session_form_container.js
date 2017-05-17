import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session, errors }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user)),
  loadDemo: () => dispatch(login({username:'Guest', password:'123456'}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
