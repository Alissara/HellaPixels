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

const App = () => (
  <div>

    <nav className="navbar">
      <Link to="/home" className="header-link">
        <nav className="logo">
          <img src="gridbig.png" />
          <h2>HellaPixels</h2>
        </nav>
      </Link>
      <AuthRoute path="/" component={SessionFormContainer}/>
      <ProtectedRoute path="/home" component={GreetingContainer}/>
    </nav>

    <main className="main">
      <Route exact path="/" component={SplashContainer} />
      <Route path="/home" render={ () => <h1>HOMEPAGE</h1> } />
    </main>

    <Route exact path="/"
      render={ () =>
        <footer className="footer">
          <section className="foot-left">
            <p>About</p>
          </section>
          <section className="foot-right">
            <a href="/#">Github</a>
            <a href="/#">LinkedIn</a>
            <a href="/#">Contact</a>
          </section>
        </footer>
      }
    />

  </div>
);

export default App;
