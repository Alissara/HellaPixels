import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos({user_id: this.props.userId});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchPhotos({user_id: nextProps.match.params.userId});
    }
  }

  //spinner or loading icon thing??

  render() {
    const { photos, isCurrentUser, updatePhoto, deletePhoto} = this.props;

    return (
      <section className="photoIndex">
        <ul>
          {photos.map(photo => (
            <PhotoIndexItem
              key={photo.id}
              photo={photo}
              isCurrentUser={isCurrentUser}
              updatePhoto={updatePhoto}
              deletePhoto={deletePhoto}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default withRouter(PhotoIndex);
