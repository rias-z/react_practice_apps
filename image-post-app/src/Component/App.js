import React, { Component } from 'react'


class ImageUploadForm extends Component {
  render() {
    return (
      <div>
        <h2>ImageUploadForm</h2>
      </div>
    )
  }
}

class ImageList extends Component {
  render() {
    return (
      <div>
        <h2>ImageList</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>

        <ImageUploadForm />
        <ImageList />
      </div>
    )
  }
}

export default App
