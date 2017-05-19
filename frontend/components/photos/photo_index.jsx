import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos({user_id: this.props.userId});
  }



  render() {
    const { photos } = this.props;

    return (
      <section className="photoIndex">
        <ul>
          {photos.map(photo => (
            <PhotoIndexItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </section>
    );
  }
}

export default PhotoIndex;
