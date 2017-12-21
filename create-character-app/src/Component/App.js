import React, { Component } from 'react'
import CreateForm from './CreateForm'


class App extends Component {
  constructor(){
    super()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    console.log(name)
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
