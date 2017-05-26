import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import style from './modal_style';
import merge from 'lodash/merge';

class HomeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShowOpen: false
    };

    this.openShowModal = this.openShowModal.bind(this);
    this.closeShowModal = this.closeShowModal.bind(this);
  }

  openShowModal() {
    this.setState({ modalShowOpen: true });
  }

  closeShowModal() {
    this.setState({ modalShowOpen: false });
  }

  render() {
    const { photo } = this.props;

    return (
      <div className="item-home">
        <a onClick={this.openShowModal}>
            <img src={photo.url} alt={photo.title} />
        </a>
        <div className="overlay" onClick={this.openShowModal}>
          <div className="text">
            {photo.title} by {photo.username}
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
                <header className="photo-user-info" id="home">
                  <Link to={`/users/${photo.user_id}`}>
                    <img src={photo.profile_url}/>
                    <h1>{photo.username}</h1>
                  </Link>
                </header>

                <figcaption className="photo-details">
                  <h2>{photo.title}</h2>
                  <br/>
                  <p>{photo.description}</p>
                </figcaption>


              </aside>
            </section>

          </section>
        </Modal>

      </div>
    );
  }
}

export default HomeItem;
