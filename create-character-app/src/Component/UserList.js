import React from 'react'


class UserList extends Component{
  render() {
    const users = this.props.users.map(user=>(
      <li key={user.id}>{user.name}</li>
    ))

    return (
      <div>
        <h3>UserList</h3>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}