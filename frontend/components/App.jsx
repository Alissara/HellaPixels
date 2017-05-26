import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SplashContainer from  './splash/splash_container';
import PhotoIndexContainer from './photos/photo_index_container';
import HomePageContainer from './home/home_container';

const App = () => (
  <div>

    <nav className="nav">
      <nav className="navbar">
      <Link to="/home" className="header-link">
        <nav className="logo">
          <img src="gridbig2.png" />
          <h2>HellaPixels</h2>
        </nav>
      </Link>
      <AuthRoute path="/" component={SessionFormContainer}/>
      <ProtectedRoute path="/home" component={GreetingContainer}/>
      <ProtectedRoute path="/users" component={GreetingContainer}/>
      </nav>
    </nav>

    <main className="main">
        <Route exact path="/" component={SplashContainer} />
        <Route path="/home" component={HomePageContainer} />
        <Route path="/users/:userId" component={PhotoIndexContainer} />
    </main>

    <Route exact path="/"
      render={ () =>
        <footer className="footer">
          <section className="foot-left">
            <h1>About</h1>
            <p>HellaPixels is a web application inspired by 500px, a photo community for discovering and sharing inspiring photography powered by creative people worldwide.</p>
          </section>
          <section className="foot-right">
            <a href="https://github.com/Alissara">Github</a>
            <a href="https://www.linkedin.com/in/alissara-rojanapairat">LinkedIn</a>
            <a href="mailto:alissara.r@gmail.com">Contact</a>
          </section>
        </footer>
      }
    />

  </div>
);

export default App;
