import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import Top from './Top'
import Admin from './Admin'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: 'no_user',
      active: true
    }
  }

  // NormalUserのログインボタン押下時
  handleLoginSubmit(e) {
    e.preventDefault()

    const userName = e.target.userName.value
    this.setState({
      userName: userName
    })

    // localStorageに入力欄の名前を登録
    localStorage.setItem('userName', userName)

    // topに遷移
    this.props.history.push('/top')
  }

  render() {
    return (
      <div className='App'>
        <h1>App</h1>

        (app_name): {this.state.userName} <br /><br />

        link:<br />
        <form onSubmit={this.handleLoginSubmit.bind(this)}>
          name: <input type='text' name='userName' defaultValue='rias'/><br />
          <input type='submit' value='Login NormalUser' />
        </form>

        <br />
        <Link to='/admin'>Login Admin</Link>
        <hr />

        <Switch>
          <Route
            path='/top'
            render={() =>
              <Top
                {...this.props}
                userName={this.state.userName}
              />
            }
          />
          <Route
            path='/admin'
            render={() =>
              <Admin
                userName={this.state.userName}
              />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default App
