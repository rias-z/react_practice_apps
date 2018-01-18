import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'


class Auth extends Component {
  render() {
    return (
      this.props.isAuthenticated? (
        <Switch>
          <Route path='/' children={this.props.children} />
        </Switch>
      ) : (
        <Redirect to={'/login'} />
      )
    )
  }
}

export default Auth
