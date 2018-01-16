import React, { Component } from 'react';


class Protected extends Component {
  render() {
    return (
      <div>
        <h2>Protected</h2>

        <button type='submit' onClick={this.props.onClick}>
          logout
        </button>
      </div>
    )
  }
}

export default Protected
