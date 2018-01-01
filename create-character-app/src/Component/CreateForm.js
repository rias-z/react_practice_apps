import React, {Component} from 'react'


class CreateForm extends Component{
  render() {
    return (
      <div>
        <h3>キャラクター作成フォーム</h3>
        <form onSubmit={this.props.onSubmit}>
          名前: <input name='name' type='text' defaultValue="tom"/><br />
          職業: <input name='job' type='text' defaultValue="student"/><br />
          STR:
          <select id="st_str">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select><br />

          <button type='submit'>CREATE</button>
        </form>
      </div>
    )
  }
}

export default CreateForm
