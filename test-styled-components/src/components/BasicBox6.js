import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  font-size: 1.5rem;
  margin: 0.5rem 1rem;
  padding: 0.2rem 0.8rem;
  border-radius: 3px;
  
  color: ${props => props.theme.main}
  border: 2px solid ${props => props.theme.main}
`

Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  }
}


const BasicBox6 = () => (
  <div>
    <h3>BasicBox06</h3>
    <Button>Normal</Button>
    <Button theme={{main: 'mediumseagreen'}}>Themed</Button>
  </div>
)

export default BasicBox6
