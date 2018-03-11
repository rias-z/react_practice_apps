import React from 'react'
import styled from 'styled-components'


const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

const StyledSubmitButton = styled.button`
  border-radius: 3px;
  font-size: 1rem;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`


class BasicBox2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: null,
    }
  }

  render() {
    return (
      <div>
        <h3>BasicBox03</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
          const inputValue = e.target.temp.value
          e.target.temp.value = ''

          this.setState({
            input: inputValue,
          })
        }}>
          <StyledInput name='temp' placeholder='@rias-z' type='text' />
          <StyledSubmitButton type='submit'>
            submit
          </StyledSubmitButton>
        </form>
        input[{this.state.input}]
      </div>
    )
  }
}

export default BasicBox2
