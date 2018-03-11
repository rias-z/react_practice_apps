import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'password',

  margin: props => props.size || '1em',
  padding: props => props.size || '1em',
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`


const BasicBox5 = () => (
  <div>
    <h3>BasicBox05</h3>
    <Input placeholder='A small text input' size='1em' />
    <Input placeholder='A bigger text input' size='2em' />
  </div>
)

export default BasicBox5
