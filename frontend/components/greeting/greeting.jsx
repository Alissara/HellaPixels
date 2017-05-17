import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import style from './modal_style';

import SessionFormContainer from '../session_form/session_form_container';
import { AuthRoute } from '../../util/route_util';

// const sessionLinks = () => (
//   <nav className="login-signup">
//     <Link to="/login" onClick={this.handleClick}>Login</Link>
//     <Link to="/signup" onClick={this.handleClick}>Sign up!</Link>
//
//     <Modal
//       isOpen={this.state.modalOpen}>
//       ...content
//     </Modal>
//   </nav>
// );

// const personalGreeting = (currentUser, logout) => (
// 	<nav className="header-right">
//     <Link to="#" className="header-name">Hi, {currentUser.username}!</Link>
//     <Link to="#" className="header-button" onClick={logout}>Log Out</Link>
//     <Link to="#" className="header-upload">Upload</Link>
// 	</nav>
// );

// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signIn: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  handleClick() {
    this.setState({ modalOpen: true});
  }

  onModalClose() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  onModalOpen() {
    style.content.opacity = 100;
  }

  render () {
    if (this.props.currentUser) {
      return (
        <nav className="header-right">
          <Link to="#" className="header-name">Hi, {this.props.currentUser.username}!</Link>
          <Link to="#" className="header-button" onClick={this.props.logout}>Log Out</Link>
          <Link to="#" className="header-upload">Upload</Link>
        </nav>
      );
    } else {
      return (
        <nav className="login-signup">
          <Link to="/login" onClick={this.handleClick}>Login</Link>
          <Link to="/signup" onClick={this.handleClick}>Sign up!</Link>

          <Modal
            contentLabel="Modal"
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={style}
            onAfterOpen={this.onModalOpen}
          >
            <button onClick={this.onModalClose}>X</button>
              <AuthRoute path="/login" component={SessionFormContainer} />
              <AuthRoute path="/signup" component={SessionFormContainer} />
              AuthForm
          </Modal>
        </nav>
      );
    }
  }

}

export default Greeting;
