import React, { useContext } from 'react'
import { StyledLoading } from '../styles/StyledLoading'

import Context from '../context/Context'

const Loading = () => {
  const {loading } = useContext(Context)
  

  return (
    <StyledLoading>
      <div className={loading ? 'container' : 'hide'}>
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
    </StyledLoading>
  )
}

export default Loading
