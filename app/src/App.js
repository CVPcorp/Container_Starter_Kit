import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <Switch>
      <Route path="/posts" component={Posts} />
      <Route path="/tasks" component={Tasks} />      
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;
