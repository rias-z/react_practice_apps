import React, { Component } from 'react'
import CreateForm from './CreateForm'


class App extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
    this.fetchData('users.json')
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    console.log(name)
  }

  fetchData(url){
    fetch(url)
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

  render() {
    return (
      <div className='App'>
        <h1>create-character-app</h1>
        <CreateForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}

export default App
