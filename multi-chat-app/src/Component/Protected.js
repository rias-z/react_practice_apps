import React, { Component } from 'react';
import request from 'superagent'


const endpoint = 'http://localhost:5000'


class Comment extends Component {
  render() {
    return (
      <li>[{this.props.comment_id}]({this.props.user_name}): {this.props.data}</li>
    )
  }
}

class CommentList extends Component {
  render() {
    const comments = this.props.comments.map( comment =>
      <Comment
        key={comment.comment_id}
        {...comment}
      />
    )

    return (
      <ul>
        {comments}
      </ul>
    )
  }
}

class CommentForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input name='data' type='text' defaultValue='test text' />
        <input type='submit' value='send' />
      </form>
    )
  }
}

class Protected extends Component {
  constructor() {
    super()

    this.state = {
      comments: []
    }
  }

  getComments() {
    const sessionId = localStorage.getItem('sessionId')
    if(!sessionId)
      return
    const token = 'Bearer ' + sessionId

    request
      .get( endpoint + '/comments')
      .set({Authorization: token})
      .then( res => {
        this.setState({
          comments: res.body
        })
      })
      .catch( () => {
        console.log("catch")
      })

  }

  postComments(data) {
    const sessionId = localStorage.getItem('sessionId')
    const user_name = localStorage.getItem('user_name')
    const user_id = localStorage.getItem('user_id')
    const token = 'Bearer ' + sessionId

    request
      .post( endpoint + '/post/comments')
      .set({Authorization: token})
      .send({'user_id': user_id, 'user_name': user_name, 'data': data})
      .then( res => {
        console.log("success")
      })
      .catch( () => {
        console.log("error: post comment")
      })
  }

  componentWillMount() {
    // コメントの取得
    this.getComments()
  }

  handleCommentPostSubmit(e) {
    e.preventDefault()

    const data = e.target.data.value
    this.postComments(data)
  }

  render() {
    return (
      <div>
        <h2>Protected</h2>

        <button type='submit' onClick={this.props.onClick}>
          logout
        </button>

        <hr />
        <h3>Comment List</h3>

        <CommentList comments={this.state.comments}/>

        <CommentForm onSubmit={this.handleCommentPostSubmit.bind(this)} />
      </div>
    )
  }
}

export default Protected
