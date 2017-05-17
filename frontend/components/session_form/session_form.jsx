import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import style from './modal_style';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      modalOpen: false,
      logIn: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  // renderErrors()

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      logIn: bool
    });
  }

  onModalClose() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  onModalOpen() {
    style.content.opacity = 100;
  }

  formHeader() {
    if (this.state.logIn) {
      return (
        <h3>Log In to HellaPixels</h3>
      );
    } else {
      return (
        <h3>Join HellaPixels</h3>
      );
    }
  }

  render() {
    return (
      <nav className="login-signup">
        <button onClick={this.handleClick(true)}>Login!</button>
        <button onClick={this.handleClick(false)}>Sign up!</button>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={style}
          onAfterOpen={this.onModalOpen}
        >
          <button onClick={this.onModalClose}>X</button>


          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br/>
              {this.formHeader()}

              <div className="login-form">
                <br/>
                <label>Username:
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>

                <br/>

                <label>Password:
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>

                <br/>

                <input type="submit" value="Submit" />

              </div>
            </form>
          </div>

        </Modal>
      </nav>
    );
  }
}

export default withRouter(SessionForm);
