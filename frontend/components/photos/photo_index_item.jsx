import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import style from './modal_style';
import merge from 'lodash/merge';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShowOpen: false,
      modalEditOpen: false,
      photo: this.props.photo
    };

    this.openShowModal = this.openShowModal.bind(this);
    this.closeShowModal = this.closeShowModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);

    this.destroyPhoto = this.destroyPhoto.bind(this);
    this.editPhoto = this.editPhoto.bind(this);
  }

  openShowModal() {
    this.setState({ modalShowOpen: true });
  }

  closeShowModal() {
    this.setState({ modalShowOpen: false });
  }

  openEditModal() {
    this.setState({ modalShowOpen: false });
    this.setState({ modalEditOpen: true });
  }

  closeEditModal() {
    this.setState({ modalEditOpen: false });
    this.setState({ modalShowOpen: true });
  }


  editButton() {
    if (this.props.isCurrentUser) {
      return (
        <div className="edit-button">
          <button onClick={this.openEditModal}>Edit</button>
          <button onClick={this.destroyPhoto}>Delete</button>
        </div>
      );
    }
  }

  destroyPhoto(e) {
    e.preventDefault();
    this.props.deletePhoto(this.props.photo.id);
    this.closeShowModal();
  }

  editPhoto(e) {
    e.preventDefault();
    this.props.updatePhoto(this.state.photo);
    this.closeEditModal();
  }

  updateButton() {
      return (
        <div className="update-button">
          <button onClick={this.closeEditModal}>Cancel</button>
          <button onClick={this.editPhoto}>Save</button>
        </div>
      );
  }

  update(field) {
    return e => {
      let newPhoto = merge({}, this.state.photo);
      newPhoto[field] = e.currentTarget.value;
      this.setState({ photo: newPhoto });
    };
  }

  render() {
    const { photo, user } = this.props;

    return (
      <div className="item">
        <a onClick={this.openShowModal}>
            <img src={photo.url} alt={photo.title} />
        </a>
        <div className="overlay" onClick={this.openShowModal}>
          <div className="text">
            {photo.title}
          </div>
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalShowOpen}
          onRequestClose={this.closeShowModal}
          style={style}>

          <section className="photo-show-container">
            <button onClick={this.closeShowModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>

            <section className="photo-show">
              <figure className="photo-box">
                <img src={photo.url} />
              </figure>

              <aside className="photo-info">
                <header className="photo-user-info">
                  <img src={user.profile_url}/>
                  <div className="username">
                    <h1>{user.username}</h1>
                  </div>
                </header>

                <figcaption className="photo-details">
                  <h2>{photo.title}</h2>
                  <br/>
                  <p>{photo.description}</p>
                </figcaption>

                {this.editButton()}
              </aside>
            </section>

          </section>
        </Modal>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalEditOpen}
          onRequestClose={this.closeEditModal}
          style={style}>

          <section className="photo-edit-container">
            <button onClick={this.closeEditModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <section className="photo-show">
              <figure className="photo-box">
                <img src={photo.url} />
              </figure>
              <aside className="photo-info">
                <form className="photo-form-box">
                  <h1>Edit Photo</h1>
                  
                  <br/>
                  <label htmlFor="title">Title</label>
                  <input id="title"
                    type="text"
                    value={this.state.photo.title}
                    onChange={this.update('title')}
                  />
                  <br/>
                  <label htmlFor="desc">Description</label>
                  <textarea id="desc"
                    value={this.state.photo.description}
                    onChange={this.update('description')}
                  />
                </form>
                  {this.updateButton()}
              </aside>
            </section>
          </section>
        </Modal>

      </div>
    );
  }

}
export default withRouter(PhotoIndexItem);
