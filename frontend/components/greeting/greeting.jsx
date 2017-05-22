import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import style from './modal_style';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      description: '',
      modalOpen: false
    };

    this.upload = this.upload.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.photos.length !== this.props.photos.length) {
      this.closeModal();
    }
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          this.setState({ url: images[0].url });
          this.openModal();
        }
      }.bind(this)
    );
  }

  uploadPhoto(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
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

        <Link to={`/users/${currentUser.id}`} className="header-name">
          {currentUser.username}
        </Link>
        <Link to="/" className="header-button" onClick={logout}>Log Out</Link>
        <button className="header-upload" onClick={this.upload}>
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
                    <br/>
                  <h1>Create Photo</h1>
                    <br/>
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
                    <br/>
                    <button onClick={this.uploadPhoto}>Save</button>
                  </div>
              </aside>
            </section>
          </section>
        </Modal>

      </nav>
    );
  }

}

export default withRouter(Greeting);
