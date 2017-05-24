import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h1 className="homepage"> HOMEPAGE </h1>
      </div>
    );
  }
}

export default withRouter(HomePage);
