import React, { Component } from 'react';
// import socketIOClient from 'socket.io-client'


class EntireChatBox extends Component {
  render() {
    const commentList = this.props.commentList.map( (comment, key) => (
      <li key={key}>
        {comment.data} ({comment.userName})
      </li>
    ))

    return (
      <div>
        <ul>
        {commentList}
        </ul>
      </div>
    )
  }
}

class EntireChatForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type='text' name='textData' defaultValue='miraiAkari' />
          <input type='submit' value='send' />
        </form>
      </div>
    )
  }
}

class EntireChat extends Component {
  onSubmit(e) {
    e.preventDefault()
    const textData = e.target.textData.value

    this.props.socket.emit(
      'msg send', {
        'userName': this.props.userName,
        'data': textData
      }
    )
  }

  render() {
    return (
      <div className='EntireChat'>
        <h3>EntireChat</h3>

        <EntireChatBox commentList={this.props.commentList} />
        <EntireChatForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default EntireChat
