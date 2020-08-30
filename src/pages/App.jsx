import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Nav from '../components/Nav/Nav';
import Food from './Food/Food';
import Comics from './Comics/Comics';
import Games from './Games/Games';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/food' component={Food}/>
          <Route path='/comics' component={Comics}/>
          <Route path='/games' component={Games}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
