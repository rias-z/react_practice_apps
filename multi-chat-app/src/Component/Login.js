import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h2>Log in</h2>

        <form onSubmit={this.props.onSubmit}>
          name: <input name='name' defaultValue='hoge'/><br />
          password: <input name='password' defaultValue='hogepass'/><br />
          <input type='submit' value='Login'/>
        </form>
      </div>
    )
  }
}

class Login extends Component {
  render() {
    return (
      this.props.isAuthenticated? (
         <Redirect to={'/'} />
        ) : (
          <div>
            <LoginForm onSubmit={this.props.onSubmit} />
          </div>
        )
    )
  }
}

export default Login
