import React, { Component } from 'react'
import CreateForm from './CreateForm'


class App extends Component {
  constructor(){
    super()
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
    fetch(url, {
      method: 'get'
    })
      .then(res => {
        console.log("fetchData")
        return res
      })
      .then(res => res.json())
      .then(data => {
        console.log("data")
        console.log(data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  fetchPostData = (e, url) => {
    e.preventDefault()
    console.log("fetchPostData")
    console.log(url)

    fetch(url, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({'name': 'deep_learning'})
    })
      .then(res => {
        console.log("fetchPostData")
        console.log(res)
      })
      .catch(err => {
        console.log("post error")
        console.log(err)
      })
  }

  render() {
    return (
      <div className='App'>
        <h1>create-character-app</h1>
        <CreateForm onSubmit={this.handleSubmit.bind(this)}/>
        <form onSubmit={e => this.fetchPostData(e, "http://localhost:5000/users")}>
          <button type="submit">POST</button>
        </form>
      </div>
    )
  }
}

export default App
