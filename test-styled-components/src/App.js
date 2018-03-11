import React from 'react'
import styled from 'styled-components'

import Buttons from './components/Buttons'
import FlexBox from './components/FlexBox'


const StyledHeader = styled.div`
  font-size: 15px;
  padding: 20px;
  text-align: center;
  color: #FFC507;
  background: #353B41;
`


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <StyledHeader className='Header'>Header</StyledHeader>

        <h1>Test-Styled-Components</h1>
        <Buttons /><hr />
        <FlexBox /><hr />
      </div>
    )
  }
}

export default App
