import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import Login from './Login'
import Protected from './Protected'
import request from 'superagent'
import socketIOClient from 'socket.io-client'


const endpoint = 'http://localhost:5000'


// ログイン処理
async function postLogin(url, user_name, password) {
  return await request
    .post(url)
    .send({'user_name': user_name, 'password': password})
}

async function getToken(url, token) {
  return await request
    .get(url)
    .set({Authorization: token})
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      isAuthenticated: false,
      user_name: "guest",
      timer: 0,
      activeUserList: []
    }
  }

  componentWillMount() {
    console.log("App componentWillMount")

    // 適当なgetを送ってログイン状態にする
    const sessionId = localStorage.getItem('sessionId')
    if(!sessionId)
      return

    const token = 'Bearer ' + sessionId
    getToken( endpoint + '/check/token', token)
      .then(() => {
        // ログイン状態にする
        this.setState({
          isAuthenticated: true,
          user_name: localStorage.getItem('user_name'),
        })

        // socket通信開始
        const socket = socketIOClient(endpoint)
        const user_id = localStorage.getItem('user_id')
        socket.emit('connected', user_id)

        // 定期処理
        this.setState({
          timer: setInterval(this.handleTimer.bind(this), 3000)
        })
      })
      .catch(err => {
        // token不正の場合ログアウトさせる
        if(err.status === 401) {
          this.handleLogout()
        } else {
          // TODO サーバに繋がっていない旨を伝える
          console.log("REQUEST FAILED: /chech/token\n", err)
        }
      })
  }

  handleTimer() {
    console.log("handleTimer")

    const sessionId = localStorage.getItem('sessionId')
    if(!sessionId)
      return
    const token = 'Bearer ' + sessionId

    request
      .get(endpoint + '/active')
      .set({Authorization: token})
      .then(res => {
        let activeUserList = []
        Object.keys(res.body).forEach( key => {
          activeUserList.push(res.body[key].user_name)
        })
        this.setState({
          activeUserList: activeUserList
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleLoginSubmit(e){
    e.preventDefault()

    const user_name = e.target.name.value
    const password = e.target.password.value

    // ログインアクション
    postLogin( endpoint + '/auth/login', user_name, password)
      .then(res =>{
        // ユーザ情報をローカルストレージに保存
        Object.keys(res.body).forEach( key => {
          localStorage.setItem(key, res.body[key])
        })

        // ユーザ情報をstateにセット
        this.setState({
          isAuthenticated: true,
          user_name: localStorage.getItem('user_name')
        })

        // socket通信開始(ログイン時)
        console.log("socket通信開始(ログイン時)")
        const socket = socketIOClient(endpoint)
        const user_id = localStorage.getItem('user_id')

        // TODO 既に他のユーザがログインしていた場合の処理が必要
        socket.emit('connected', (user_id))

        // 定期処理
        this.setState({
          timer: setInterval(this.handleTimer.bind(this), 3000)
        })
      })
      .catch(err => {
        // TODO emailかpasswordが間違っていることを警告
        console.log("REQUEST FAILED: /auth/login\n", err)
      })
  }

  handleLogout(e){
    if(e)
      e.preventDefault()

    /*
     TODO ログアウト時にソケット通信の終了を行う
     componentを再レンダリングするか，リロードをし直すか
     */
    // ソケット通信の終了 (仮)
    const user_id = localStorage.getItem('user_id')
    const socket = socketIOClient(endpoint)
    socket.emit('deleteUserList', user_id)

    // ローカルストレージの削除
    localStorage.clear()

    // ログアウト状態にする
    this.setState({
      isAuthenticated: false
    })

    // 定期処理の終了
    clearInterval(this.state.timer)
  }

  render() {
    return (
      <div className='App'>
        <h1>App</h1>

        name: {this.state.user_name}<br />
        activeUserList: {this.state.activeUserList}

        <Switch>
          <Route
            path='/login'
            render={() =>
              <Login
                onSubmit={this.handleLoginSubmit.bind(this)}
                isAuthenticated={this.state.isAuthenticated}
              />
            }
          />
          <Auth isAuthenticated={this.state.isAuthenticated}>
            <Switch>
              <Route
                path='/'
                render={() =>
                  <Protected
                    onClick={this.handleLogout.bind(this)}
                  />
                }
              />
            </Switch>
          </Auth>
        </Switch>

      </div>
    )
  }
}

export default App;
