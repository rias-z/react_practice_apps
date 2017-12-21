import React, {Component} from 'react'


class CreateForm extends Component{
  render() {
    return (
      <div>
        <h3>キャラクター作成</h3>
        <form onSubmit={this.props.onSubmit}>
          <input name='name' type='text' placeholder='your name...' />
          <br />
          <button type='submit'>CREATE</button>
        </form>
      </div>
    )
  }
}

export default CreateForm
