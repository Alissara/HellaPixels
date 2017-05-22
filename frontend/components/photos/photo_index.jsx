import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

import Masonry from './masonry';

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
      <section className="container">
        <div className="masonry-container">
          <Masonry brakePoints={[350, 500, 750]}>
            {photos.map((photo) => {
              return (
                <PhotoIndexItem
                  key={photo.id}
                  photo={photo}
                  isCurrentUser={isCurrentUser}
                  updatePhoto={updatePhoto}
                  deletePhoto={deletePhoto}
                />
              );
            })}
					</Masonry>
        </div>
      </section>
    );
  }
}



export default withRouter(PhotoIndex);
