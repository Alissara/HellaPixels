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
          <div className="edit-button">
            <button>Edit</button>
          </div>
        </figcaption>

        <Modal>
        </Modal>

      </section>
    );
  }

}

export default withRouter(UserPage);
