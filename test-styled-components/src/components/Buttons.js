import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
  background: ${props => props.active ? 'gray': 'white'};
  color: ${props => props.active ? 'white': 'black'};
  margin: 1rem;
  font-size: 1.5rem;
  padding: 0.25rem 1rem;
  border: 2px solid ${props => props.active ? 'transparent': 'black'};
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`

const StyledRequestButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  font-size: 1.5rem;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;


class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  toggleButton() {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    return (
      <div>
        <h3>simple buttons</h3>

        <StyledButton
          onClick={() => this.toggleButton()}
          active={this.state.active}
        >
          button
        </StyledButton>

        <StyledRequestButton
         onClick={(e) => {
           e.preventDefault()
           console.log("push request button")
         }}> request </StyledRequestButton>
      </div>
    )
  }
}

export default Buttons
