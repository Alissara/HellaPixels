import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import UserPage from './user_page';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos({user_id: this.props.userId});
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchPhotos({user_id: nextProps.match.params.userId});
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }
  //spinner or loading icon thing??

  render() {
    const { photos, isCurrentUser, user, updatePhoto, deletePhoto, updateUser} = this.props;

    return (
      <section className="userspage-container">
        <div className="usersdetail-container">
          <UserPage
            user={user}
            isCurrentUser={isCurrentUser}
            updateUser={updateUser} />
        </div>


        <div className="grid">
            {photos.map((photo) => {
              return (
                <PhotoIndexItem
                  key={photo.id}
                  photo={photo}
                  isCurrentUser={isCurrentUser}
                  user={user}
                  updatePhoto={updatePhoto}
                  deletePhoto={deletePhoto} />
              );
            })}

        </div>


      </section>
    );
  }
}



export default withRouter(PhotoIndex);
