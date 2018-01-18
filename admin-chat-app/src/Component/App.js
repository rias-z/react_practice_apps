import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom'


class Top extends Component {
  render() {
    return(
      <div className='Top'>
        <h2>Top</h2>
      </div>
    )
  }
}

class Admin extends Component {
  render() {
    return(
      <div className='Admin'>
        <h2>Admin</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>

        <Link to="/">go top</Link><br />
        <Link to="/admin">go admin</Link>

        <hr />

        <Switch>
          <Route exact path='/' component={Top} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App
