import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import './App.sass';

const App = () => {
  return (
    <div>
      <Link to="/">Home Page</Link><br/>
      <Link to="/about">About Page</Link>
      <Switch>
        <Route path="/" render={() => <h1>Home page</h1>} exact/>
        <Route path="/about" render={() => <h1>About page</h1>}/>
      </Switch>
    </div>
  )
}

export default App;