import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser, logout} = this.props;
    return(
      <nav className="home-nav-right">
        <Link to="#" className="header-name">Hi, {currentUser.username}!</Link>
        <Link to="#" className="header-button" onClick={logout}>Log Out</Link>
        <Link to="#" className="header-upload">Upload</Link>
      </nav>
    );
  }

}

export default Greeting;
