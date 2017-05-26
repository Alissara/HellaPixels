import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomeItem from './home_item';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchHomePhotos();
  }


  render() {
    const { photos } = this.props;

    return (
      <div className="grid-home">
          {photos.map((photo) => {
            return (
              <HomeItem
                key={photo.id}
                photo={photo} />
            );
          })}
      </div>
    );
  }
}

export default withRouter(HomePage);
