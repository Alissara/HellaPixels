import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import style from './modal_style';
import merge from 'lodash/merge';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      user: this.props.user
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.editUser = this.editUser.bind(this);
    this.uploadProfile = this.uploadProfile.bind(this);
    this.uploadCover = this.uploadCover.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  editUser(e) {
    e.preventDefault();
    this.closeModal();
    this.props.updateUser(this.state.user);
  }

  update(field) {
    return e => {
      let newUserInfo = merge({}, this.state.user);
      newUserInfo[field] = e.currentTarget.value;
      this.setState({ user: newUserInfo });
    };
  }

  editButton() {
    if (this.props.isCurrentUser) {
      return (
        <div className="edit-button">
          <button onClick={this.openModal}>Edit</button>
        </div>
      );
    } else {
      return (
        <div className="follow-button">
          <button>Follow / Unfollow</button>
        </div>
      );
    }
  }

  uploadProfile(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          let newUserInfo = merge({}, this.state.user);
          newUserInfo['profile_url'] = images[0].url;
          this.setState({ user: newUserInfo });
        }
      }.bind(this)
    );
  }

  uploadCover(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          let newUserInfo = merge({}, this.state.photo);
          newUserInfo['cover_url'] = images[0].url;
          this.setState({ user: newUserInfo });
        }
      }.bind(this)
    );
  }

  render() {
    const { user } = this.props;

    return (
      <section className="user-container">
        <figure className="user-cover-img">
          <img src={user.cover_url} />
        </figure>
        <figcaption className="user-info">
          <img src={user.profile_url} />
          <h1>{user.username}</h1>
          <p>{user.bio}</p>
          <div className="follow-buttons">
            <button># Followers</button>
            <button># Following</button>
          </div>
          {this.editButton()}
        </figcaption>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>

          <section className="user-edit-container">
            <button onClick={this.closeModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <form className="user-edit-form">
              <h1>Edit User Profile</h1>
                <br/>
              <label htmlFor="bio">Bio</label>
              <textarea id="bio"
                value={this.state.user.bio}
                onChange={this.update('bio')} />
                <br/>
              <button onClick={this.uploadProfile}>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                Upload Profile Image
              </button>
                <br/>
              <button onClick={this.uploadCover}>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                Upload Cover Image
              </button>
                <br/>
            </form>
              <div className="update-button">
                <button onClick={this.closeModal}>Cancel</button>
                <button onClick={this.editUser}>Save</button>
              </div>
          </section>
        </Modal>

      </section>
    );
  }

}

export default withRouter(UserPage);
