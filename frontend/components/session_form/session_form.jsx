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

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadDemo = this.loadDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/home');
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

  loadDemo(e) {
    e.preventDefault();
    const user = {username:'Guest', password:'123456'};
    this.props.login({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  closeModal() {
    this.setState({ modalOpen: false });
    // style.content.opacity = 0;
    this.props.clearErrors();
  }

  openModal(bool) {
    this.setState({
      modalOpen: true,
      logIn: bool
    });
    // style.content.opacity = 100;
  }

  formHeader() {
    return (this.state.logIn) ? <h3>Log In to HellaPixels</h3> : <h3>Join HellaPixels</h3>;
  }

  render() {
    return (
      <nav className="login-signup">
        <button onClick={this.openModal.bind(this, true)}>Login</button>
        <button onClick={this.openModal.bind(this, false)}>Sign up</button>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>

          <button onClick={this.closeModal}>X</button>

          <div className="login-form-container">
            <form className="login-form-box">
              <br/>
              {this.formHeader()}
              {this.renderErrors()}

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

                <input onClick={this.handleSubmit} type="submit" value="Submit" />
                <p>or</p>
                <button onClick={this.loadDemo}>Guest Demo</button>
              </div>
            </form>
          </div>


        </Modal>
      </nav>
    );
  }

}

export default withRouter(SessionForm);
