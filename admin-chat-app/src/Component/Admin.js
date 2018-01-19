import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import EntireChat from './EntireChat'
import SecretChat from './SecretChat'


const endpoint = 'http://localhost:5000'
const secretUserList = [
  'rias',
  'charlot'
]


class Admin extends Component {
  constructor(props) {
    super(props)

    const socket = socketIOClient(endpoint)
    this.state = {
      socket: socket,
      userList: [],
      userName: this.props.userName,
      commentList: [],
      secretCommentList: []
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

      socket.on('update_secret_msg', (receiveMsgData) => {
        // TODO 次生まれ変わるときはnewMsgというクソ変数名は避ける
        let newMsg = this.state.secretCommentList
        newMsg.push(receiveMsgData)

        this.setState({
          secretCommentList: newMsg
        })
      })

      socket.on('update_msg', (receiveMsg) => {
        let newMsg = this.state.commentList
        newMsg.push(receiveMsg)

        this.setState({
          commentList: newMsg
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

        <EntireChat {...this.state} />

        { secretUserList.map( (secretUser, key) => {
          const secretCommentList = []

          this.state.secretCommentList.map( msgData => {
            console.log(secretUser)
            if ( msgData.from === secretUser){
              secretCommentList.push(msgData.data)
            }
          })

          return (
            <SecretChat
              {...this.state}
              key={key}
              secretUser={secretUser}
              secretCommentList={secretCommentList}
            />
          )
        })}
      </div>
    )
  }
}

export default Admin
