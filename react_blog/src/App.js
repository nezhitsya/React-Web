import React from 'react';
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Trip from './pages/algos'
import Activity from './pages/cloud'
import Food from './pages/health'
import Home from './pages/home'
import Login from './pages/login'
import ETC from './pages/web-dev'
import EditPost from './pages/edit-post'
import Post from './pages/post'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/trip' component={Trip} />
          <Route path='/activity' component={Activity} />
          <Route path='/food' component={Food} />
          <Route path='/login' component={Login} />
          <Route path="/etc" component={ETC} />
          <Route path="/edit-post" component={EditPost} />
          <Route path='/post/:id' component={Post} />
          <Route path='/' component={Home} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;