import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
      <SessionFormContainer />
    );
  }

  personalGreeting(currentUser, logout) {
    return (
      <nav className="header-right">
        <Link to="#" className="header-name">Hi, {currentUser.username}!</Link>
        <Link to="#" className="header-button" onClick={logout}>Log Out</Link>
        <Link to="#" className="header-upload">Upload</Link>
      </nav>
    );
  }

  render() {
    const {currentUser, logout} = this.props;
    return(
      <div>
        { currentUser ? this.personalGreeting(currentUser, logout) : this.sessionLinks() }
      </div>
    );
  }

}

export default Greeting;
