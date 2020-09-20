import React from 'react'
import { StyledLoading } from '../styles/StyledLoading'

const Loading = () => {
  return (
    <StyledLoading>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  )
}

export default Loading
