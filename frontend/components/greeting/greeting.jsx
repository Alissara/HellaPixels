import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import style from './modal_style';
import styleError from './modal_error_style';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      description: '',
      modalOpen: false,
      modalErrorOpen: false
    };

    this.upload = this.upload.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openErrorModal = this.openErrorModal.bind(this);
    this.closeErrorModal = this.closeErrorModal.bind(this);

  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors.length === 0) {
  //
  //   }
  // }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          this.setState({ url: images[0].secure_url });
          this.openModal();
        } else {
          this.openErrorModal();
        }
      }.bind(this)
    );
  }

  uploadPhoto(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
    if (this.state.title !== '') {
      this.closeModal();
      this.props.history.push(`/users/${this.props.currentUser.id}`);
    }
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
    this.props.clearErrors();
    this.setState({
      title: '',
      description: ''
    });
  }

  openErrorModal() {
    this.setState({ modalErrorOpen: true });
  }

  closeErrorModal() {
    this.setState({ modalErrorOpen: false });
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
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

  render() {
    const {currentUser, logout} = this.props;
    return(
      <nav className="home-nav-right">
        <div className="dropbtn"><img src={currentUser.profile_url}/>


          <div className="dropdown-content">
            <Link to={`/users/${currentUser.id}`}>
              <button className="header-name">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                <p>{currentUser.username}</p>
              </button>
            </Link>

            <Link to="/home">
              <button className="header-homefeed">
                <i className="fa fa-home" aria-hidden="true"></i>
                <p>Home Feed</p>
              </button>
            </Link>

            <button className="header-upload" onClick={this.upload}>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                <p>Upload</p>
            </button>

            <Link to="/" onClick={logout}>
              <button className="header-button">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <p>Log Out</p>
              </button>
            </Link>
          </div>

        </div>
        <button className="uploadbtn" onClick={this.upload}>
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
        </button>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>

          <section className="photo-create-container">
            <button onClick={this.closeModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <section className="photo-create">
              <figure className="photo-box">
                <img src={this.state.url}/>
              </figure>
              <aside className="photo-info">
                <form className="photo-form-box">
                  <h1>Create Photo</h1>
                  {this.renderErrors()}
                    <br/>
                  <label htmlFor="title">Title</label>
                  <input id="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                  />
                  <br/>
                  <label htmlFor="desc">Description</label>
                  <textarea id="desc"
                    value={this.state.description}
                    onChange={this.update('description')}
                  />
                </form>
                  <div className="create-button">
                    <button onClick={this.closeModal}>Cancel</button>
                    <button onClick={this.uploadPhoto}>Save</button>
                  </div>
              </aside>
            </section>
          </section>
        </Modal>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalErrorOpen}
          onRequestClose={this.closeErrorModal}
          style={styleError}>

          <section className="error-upload">
            <button onClick={this.closeErrorModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <h1>Image Upload Failed!</h1>
            <div className="error-upload-button">
              <button onClick={this.closeErrorModal}>Cancel</button>
              <button onClick={this.upload}>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                Try Again
              </button>
            </div>
          </section>
        </Modal>
      </nav>
    );
  }

}

export default withRouter(Greeting);
