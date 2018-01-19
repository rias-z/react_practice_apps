import React, { Component } from 'react';


class SecretChatBox extends Component {
  render() {
    const commentList = this.props.commentList.map( (comment, key) => (
      <li key={key}>
        {comment}
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

class SecretChatForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type='text' name='textData' defaultValue='kizunaAI' />
          <input type='submit' value='send' />
        </form>
      </div>
    )
  }
}

class SecretChat extends Component {
  onSubmit(e) {
    e.preventDefault()
    const msgFrom = this.props.userName
    const msgTo = this.props.secretUser

    console.log("msgFrom:", msgFrom)
    console.log("msgTo:", msgTo)
    const textData = e.target.textData.value

    this.props.socket.emit(
      'secret msg send', {
        'to': this.props.secretUser,
        'from': this.props.userName,
        'data': textData
      }
    )
  }

  render() {
    return (
      <div className='EntireChat'>
        <h3>SecretChat (to={this.props.secretUser})</h3>

        <SecretChatBox commentList={this.props.secretCommentList} />
        <SecretChatForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default SecretChat
