import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px

`


const BasixBox03 = () => (
  <div>
    <h3>BasicBox03</h3>
    <StyledButton>Normal</StyledButton>
    <StyledButton primary>Primary</StyledButton>
  </div>
)

export default BasixBox03
