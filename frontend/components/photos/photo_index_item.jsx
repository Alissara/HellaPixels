import React from 'react';

class PhotoIndexItem extends React.Component {

  render() {
    const { photo } = this.props;

    return(
      <li className="photo-index-item">
        <a>
          <span> { photo.id } </span>
          <span> { photo.title } </span>
        </a>
      </li>
    );
  }

}
export default PhotoIndexItem;

// <img src={photo.url} alt={photo.title} />
