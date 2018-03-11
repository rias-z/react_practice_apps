import React from 'react'
import Flex, { FlexItem } from 'styled-flex-component'


const FlexBox = () => (
  <div>
    <h3>styled-flex-component</h3>
    <Flex center full>

    <FlexItem order="4">
      <h4>PlayerA</h4>
    </FlexItem>

    <FlexItem order="3">
      <h4>Private2</h4>
    </FlexItem>

    <FlexItem order="2">
      <h4>Private1</h4>
      <ul>
        <li>D</li>
        <li>D</li>
        <li>D</li>
        <li>D</li>
        <li>D</li>
      </ul>
    </FlexItem>

    <FlexItem order="1">
      <div>
        <h4>PublicMessage</h4>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    </FlexItem>
    </Flex>
  </div>
)

export default FlexBox
