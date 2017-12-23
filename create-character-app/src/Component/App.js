import React, { Component } from 'react'
import CreateForm from './CreateForm'


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

    const name = e.target.name.value
    console.log(name)
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
        this.setState({ isLoading: false})
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

  fetchPostData = (e, url) => {
    e.preventDefault()

    this.setState({ isLoading: true })

    fetch(url, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({'name': 'deep_learning'})
    })
      .then(res => {
        if(!res.ok){
          throw Error(res.statusText)
        }
        this.setState({ isLoading: false })
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
          <h1>create-character-app</h1>
          <CreateForm onSubmit={this.handleSubmit.bind(this)}/>
          <form
            onSubmit={e => this.fetchPostData(e, "http://localhost:5000/users")}>
            <button type="submit">POST</button>
          </form>
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
