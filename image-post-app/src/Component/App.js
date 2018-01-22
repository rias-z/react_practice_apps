import React, { Component } from 'react'
import request from 'superagent'


const createObjectURL = (window.URL || window.webkitURL).createObjectURL ||
  window.createObjectURL

class ImageUploadForm extends Component {
  constructor() {
    super()

    this.state = {
      imgSrc: '',
      message: ''
    }
  }

  handleChange(e) {
    e.preventDefault()
    const imageUrl = createObjectURL(e.target.files[0])

    this.setState({
      imgSrc: imageUrl
    })
  }

  handlePost(e) {
    e.preventDefault()

    const data = new FormData()
    data.append('file', e.target.image.files[0])

    request
      .post('http://localhost:5000/post/image')
      .attach('image', e.target.image.files[0])
      .then(res => {
        this.setState({
          message: '登録できました'
        })
      })
      .catch(err => {
        console.log("err")

        this.setState({
          message: '失敗しました'
        })
      })
  }

  render() {
    return (
      <div>
        <h2>ImageUploadForm</h2>

        <form onSubmit={this.handlePost.bind(this)}>
          <input type='file' name='image' onChange={this.handleChange.bind(this)}/>

          {(() => {
            if (this.state.imgSrc){
              return (
                <div>
                  <br />プレビュー (100*100)<br />
                  <img alt='img' src={this.state.imgSrc} width='100' height='100'/>
                </div>
              )
            }
          })()}

          <br />
          <input type='submit' value='post' />
          {(() => {
            if (this.state.message){
              return (
                <div>{this.state.message}</div>
              )
            }
          })()}
        </form>

        getで取ってこれたimg<br />
        <img alt='img' width='100' height='100'
             src='http://localhost:5000/images/icon_yurikuma.jpg'
        />
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
