import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import style from './modal_style';
import styleFollow from './modal_follow_style';
import styleUser from './modal_user_style';
import merge from 'lodash/merge';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      bio: this.props.user.bio,
      profile_url: this.props.user.profile_url,
      cover_url: this.props.user.cover_url,
      followers: this.props.followers,
      followings: this.props.followings,

      modalOpen: false,
      modalFollowingOpen: false,
      modalFollowersOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.editUser = this.editUser.bind(this);
    this.uploadProfile = this.uploadProfile.bind(this);
    this.uploadCover = this.uploadCover.bind(this);
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);

    this.openFollowingModal = this.openFollowingModal.bind(this);
    this.closeFollowingModal = this.closeFollowingModal.bind(this);
    this.openFollowersModal = this.openFollowersModal.bind(this);
    this.closeFollowersModal = this.closeFollowersModal.bind(this);
    this.switchToFollowersModal = this.switchToFollowersModal.bind(this);
    this.switchToFollowingModal = this.switchToFollowingModal.bind(this);

  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openFollowingModal() {
    this.setState({ modalFollowingOpen: true });
  }

  closeFollowingModal() {
    this.setState({ modalFollowingOpen: false });
  }

  openFollowersModal() {
    this.setState({ modalFollowersOpen: true });
  }

  closeFollowersModal() {
    this.setState({ modalFollowersOpen: false });
  }

  switchToFollowersModal() {
    this.setState({ modalFollowingOpen: false });
    this.setState({ modalFollowersOpen: true });
  }

  switchToFollowingModal() {
    this.setState({ modalFollowersOpen: false });
    this.setState({ modalFollowingOpen: true });
  }

  editUser(e) {
    e.preventDefault();
    this.closeModal();
    this.props.updateUser(this.state);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  editButton() {
    if (this.props.isCurrentUser) {
      return (
        <div className="edit-user-button">
          <button onClick={this.openModal}>Edit</button>
        </div>
      );
    } else {
      return (
        <div className="follow-button">
          {this.followButton()}
        </div>
      );
    }
  }

  followButton() {
    const followersArr = this.props.followers.map((follower) => {
      return follower.id;
    });

    if (followersArr.includes(this.props.currentUserId)) {
      return <button onClick={this.unfollowUser}>Unfollow</button>;
    } else {
      return <button onClick={this.followUser}>Follow</button>;
    }
  }

  followUser(e) {
    e.preventDefault();
    this.props.createFollow({user_id: this.props.user.id});
  }

  unfollowUser(e) {
    e.preventDefault();
    this.props.deleteFollow({user_id: this.props.user.id});
  }


  uploadProfile(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          this.setState({ profile_url: images[0].url });
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
          this.setState({ cover_url: images[0].url });
        }
      }.bind(this)
    );
  }

  render() {
    const { user, followers, followings } = this.props;

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
            <button onClick={this.openFollowersModal}>
              {followers.length} Followers
            </button>
            <button onClick={this.openFollowingModal}>
              {followings.length} Following
            </button>
          </div>
          {this.editButton()}
        </figcaption>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={styleUser}>

          <section className="user-edit-container">
            <button onClick={this.closeModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <form className="user-edit-form">
              <h1>Edit User Profile</h1>
                <br/>
              <label htmlFor="bio">Bio</label>
              <textarea id="bio"
                value={this.state.bio}
                onChange={this.update('bio')} />
                <br/>
              <img src={this.state.profile_url} />
              <button onClick={this.uploadProfile}>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                Upload Profile Image
              </button>
                <br/>
              <img src={this.state.cover_url} />
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


        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalFollowingOpen}
          onRequestClose={this.closeFollowingModal}
          style={styleFollow}>

          <div className="follows-container">
            <button onClick={this.closeFollowingModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <h1>Following</h1>
            <br/>
            <ul>
              {followings.map((following) => {
                return (
                  <li key={following.id}>
                    <Link to={`/users/${following.id}`} onClick={this.closeFollowingModal}>
                      <img src={following.profile_url} />
                      <p>{following.username}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <br/>
            <button onClick={this.switchToFollowersModal} className="switchFollow">
              Followers of {user.username}
            </button>
          </div>
        </Modal>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalFollowersOpen}
          onRequestClose={this.closeFollowersModal}
          style={styleFollow}>

          <div className="follows-container">
            <button onClick={this.closeFollowersModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <h1>Followers</h1>
            <br/>
            <ul>
              {followers.map((follower) => {
                return (
                  <li key={follower.id}>
                    <Link to={`/users/${follower.id}`} onClick={this.closeFollowersModal}>
                        <img src={follower.profile_url} />
                        <p>{follower.username}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <br/>
            <button onClick={this.switchToFollowingModal} className="switchFollow">
              <p>{user.username} is Following</p>
            </button>
          </div>
        </Modal>



      </section>
    );
  }

}

export default withRouter(UserPage);
