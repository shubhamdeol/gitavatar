import React, { Component } from 'react';
import UserBuilder from './containers/UserBuilder/UserBuilder';
import { Route } from 'react-router-dom';
import UserDetails from './containers/UserDetails/UserDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" exact component = {UserBuilder}/>
          <Route path="/users/:userLogin"  component={UserDetails} />
      </div>
    );
  }
}

export default App;
