import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom'


class Top extends Component {
  onSubmit(e) {
    e.preventDefault()
    const userName = e.target.userName.value

    this.props.updateState(userName)
  }

  render() {
    return(
      <div className='Top'>
        <h2>Top</h2>

        <form onSubmit={this.onSubmit}>
          name: <input type='text' name='userName' defaultValue='rias'/><br />
          <input type='submit' value='user change' />
        </form>
      </div>
    )
  }
}

class Admin extends Component {
  constructor() {
    super()

    console.log(this.props)
    // this.props.updateState('admin')
  }

  render() {
    return(
      <div className='Admin'>
        <h2>Admin</h2>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      userName: 'no_user',
      active: true
    }
  }

  updateState(userName){
    console.log("updateState")
    // this.setState({
    //   userName: userName
    // })
  }

  render() {
    return (
      <div className='App'>
        <h1>App</h1>

        userName: {this.state.userName} <br /><br />

        <Link to='/'>go top</Link><br />
        <Link to='/admin'>go admin</Link>

        <hr />

        <Switch>
          <Route
            exact path='/'
            render={() => <Top {...this.state} />}
            updateState={this.updateState.bind(this)}
          />
          <Route
            path='/admin'
            render={() => <Admin />}
            updateState={this.updateState.bind(this)}
          />
        </Switch>
      </div>
    )
  }
}

export default App
