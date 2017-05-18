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
    <nav>
      <Link to="/home" className="header-link">HellaPixels!</Link>
      <AuthRoute path="/" component={SessionFormContainer}/>
      <ProtectedRoute path="/home" component={GreetingContainer}/>
    </nav>
    <main>
      <Route exact path="/" component={SplashContainer} />
      <Route path="/home" render={() => <h1>HOMEPAGE</h1>} />
    </main>
  </div>
);

export default App;
