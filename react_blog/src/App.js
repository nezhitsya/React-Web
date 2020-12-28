import React from 'react'
import './assets/scss/base.scss'
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PageRenderer from './page-renderer';

function App() {
  const user = {
    firstName: 'Dayeong',
    lastName: 'Lee'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={ PageRenderer } />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404 } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// cd react_blog
// yarn start
// yarn add node-sass sass-loader
// yarn add react-router react-router-dom
// yarn add antd @quasar/extras
// yarn add moment