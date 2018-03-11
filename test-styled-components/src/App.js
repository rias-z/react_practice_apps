import React from 'react'
import styled from 'styled-components'

import FlexBox from './components/FlexBox'

const StyledApp = styled.div`
  background-color: rgb(200, 255, 255);
  width: 100%;
  height: 100%;
`

const StyledHeader = styled.div`
  font-size: 15px;
  padding: 20px;
  text-align: center;
  color: #FFC507;
  background: #353B41;
`

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


class App extends React.Component {
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
      <StyledApp className='App'>
        <StyledHeader className='Header'>
          Header
        </StyledHeader>

        <h1>Test-Styled-Components</h1>
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
          }}
        >request</StyledRequestButton>
      </StyledApp>
        <FlexBox /><hr />
    )
  }
}

export default App
