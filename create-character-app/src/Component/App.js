import React, { Component } from 'react'
import CreateForm from './CreateForm'
import UserList from './UserList'

class App extends Component {
  constructor(){
    super()

    const users = []
    this.state = {
      users: users,
      isLoading: false,
      hasError: false
    }
  }

  componentDidMount(){
    this.fetchData('http://localhost:5000/users')
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      "id": this.state.users.length + 1,
      "name": e.target.name.value
    }

    this.fetchPostData(e, "http://localhost:5000/users", user)
  }

  fetchData(url){
    this.setState({ isLoading: true })

    fetch(url, {
      method: 'get',
      timeout: 5000
    })
      .then(res => {
        if(!res.ok) {
          throw Error(res.statusText)
        }
        this.setState({ isLoading: false })
        return res
      })
      .then(res => res.json())
      .then(data => {
        const users = data.map(data => {
          return Object.assign({}, data)
        })
        this.setState({ users: users })
      })
      .catch(() => {
        console.log("connection failed")
        this.setState({ hasError: true })
      })
  }

  fetchPostData = (e, url, user) => {
    e.preventDefault()

    this.setState({ isLoading: true })

    fetch(url, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify( {'name': user.name} )
    })
      .then(res => {
        if(!res.ok){
          throw Error(res.statusText)
        }
        this.setState({ isLoading: false })

        const users = this.state.users
        users.push(user)
        this.setState({ users: users })
      })
      .catch(() => {
        console.log("connection failed")
        this.setState({ hasError: true })
      })
  }

  render() {
    if ( !this.state.isLoading) {
      return (
        <div className='App'>
          <CreateForm onSubmit={this.handleSubmit.bind(this)}/>

          <br />

          <UserList users={this.state.users} />
        </div>
      )
    }else{
      if (!this.state.hasError) {
        return(
          <div className='App'>
            isLoading...
          </div>
        )
      }else{
        return(
          <div className='App'>
            Connection Failed
          </div>
        )
      }
    }
  }
}

export default App
