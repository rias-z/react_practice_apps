import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'


const endpoint = 'http://localhost:5000'


class Admin extends Component {
  constructor(props) {
    super(props)

    const socket = socketIOClient(endpoint)
    this.state = {
      socket: socket,
      userList: [],
      userName: this.props.userName
    }
    this.init(socket)
  }

  componentWillMount() {
    this.setState({
      userName: 'admin'
    })
  }

  init(socket) {
    socket.on('connect', () => {
      // ユーザのログイン時
      socket.emit('connected', {'userName': 'admin'})

      // ユーザのログイン/ログアウト時
      socket.on('update_user', (receiveUserList) => {
        let userList = []

        Object.keys(receiveUserList).forEach( key => {
          userList.push(receiveUserList[key])
        })

        // ログインしているユーザの更新
        this.setState({
          userList: userList
        })
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("handleSubmit")

    this.state.socket.emit('msg send', {'userName': 'foo', 'data': 'world!!'})
  }

  render() {
    const userList = this.state.userList.map( (user, key) => (
      <li key={key}>
        {key}: {user.userName}
      </li>
    ))

    return(
      <div className='Admin'>
        <h2>Admin</h2>

        (admin_user): {this.state.userName}<br />

        Online:
        <ul>
          {userList}
        </ul>
        <br />
        <input type='button' onClick={this.handleSubmit.bind(this)} value='handleSubmit'/>
      </div>
    )
  }
}

export default Admin
