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
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.update = this.update.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

	componentDidUpdate() {
		if (this.props.loggedIn) {
			this.props.history.push("/");
		}
	}

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.logIn) {
      this.props.login({user});
    } else {
      this.props.signup({user});
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
                <p>or</p>
                <button>Guest Demo</button>
              </div>
            </form>
          </div>

        </Modal>
      </nav>
    );
  }
}

export default withRouter(SessionForm);
