import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import EntireChat from './EntireChat'
import SecretChat from './SecretChat'


const endpoint = 'http://localhost:5000'


class Top extends Component {
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
    const userName = localStorage.getItem('userName')
    if ( !userName ) {
      // TODO localStorageのuserNameを削除した状態でリロードした時の処理が必要
      console.log("NO USER")
    } else {
      this.setState({
        userName: userName
      })
    }
  }

  init(socket) {
    socket.on('connect', () => {
      // ユーザのログイン時
      socket.emit('connected', {'userName': this.state.userName})

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
        newMsg.push(receiveMsgData.data)

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

  render() {
    return(
      <div className='Top'>
        <h2>Top</h2>
        (top_user): {this.state.userName}

        <EntireChat {...this.state}/>

        <SecretChat secretUser='admin' {...this.state}
        secretCommentList={this.state.secretCommentList} />
      </div>
    )
  }
}

export default Top
