import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-color: palevioletred;
  border-radius: 3px;
`

const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`


const BasicBox4 = () => (
  <div>
    <h3>BasicBox4</h3>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
)

export default BasicBox4
