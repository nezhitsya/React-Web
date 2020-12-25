import logo from './logo.svg';
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;

// cd react_blog
// yarn start
// yarn add node-sass sass-loader
// yarn add react-router react-router-dom