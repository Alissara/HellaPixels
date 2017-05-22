import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <p>HOMEPAGE</p>
        <Link to="/users/1">user1</Link>
        <br/>
        <Link to="/users/2">user2</Link>
        <br/>
        <Link to="/users/3">user3</Link>
        <br/>
        <Link to="/users/4">user4</Link>
        <br/>
        <Link to="/users/5">user5</Link>
        <br/>
        <Link to="/users/6">user6</Link>
        <br/>
        <Link to="/users/7">user7</Link>

      </div>
    );
  }
}

export default withRouter(HomePage);
