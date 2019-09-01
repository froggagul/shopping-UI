import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './routes/Home';
import History from './routes/History';
import NoMatch from './routes/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <hr/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/history" component={History}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
