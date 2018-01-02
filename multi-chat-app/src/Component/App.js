import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

const Login = () => (
  <div>
    <h1>Login</h1>
    <a href="/admin">go Admin</a>
  </div>
)

const Admin = () => (
  <div>
    <h1>Admin</h1>
    <a href="/">go Login</a>
  </div>
)

const Main = () => (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/Admin' component={Admin} />
  </Switch>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Main />
      </div>
    );
  }
}

export default App;
