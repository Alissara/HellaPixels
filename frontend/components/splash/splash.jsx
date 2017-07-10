import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.loadDemo = this.loadDemo.bind(this);
  }

  loadDemo() {
    const user = {username:'Guest', password:'123456'};
    this.props.login({user});
  }

  render() {
    return (
      <section className="hero-image">
    		<section className="hero-text">
    				<h1>Home to everyone's best photos</h1>
    				<h4>Showcase your work and stay inspired</h4>
    				<button onClick={this.loadDemo}>Demo</button>
    		</section>
    	</section>
    );
  }

}

export default Splash;
