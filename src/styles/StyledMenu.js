import Styled from 'styled-components'
import { detailColor, darkDetailColor } from './GlobalStyle'

export const StyledMenu = Styled.div`


width: 100%;
height: 100%;
font-family: "Open Sans", sans-serif;

.cancel {
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translatex(-50%);
  color: ${detailColor};
  font-size: 22px;
  opacity: ${props => (props.menu === 1 ? '1' : '0')};
  pointer-events: ${props => (props.menu === 1 ? 'default' : 'none')};
  transition: .3s ease all;
  z-index: 100;
  cursor: pointer;
}

.box {
  width: 300px;
  height: 40px;
  background: ${detailColor};
  margin: 10px 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translatex(-50%);
  top: -50%;
  z-index: ${props => (props.menu === 1 ? '100' : '-1')};
  border-radius: 5px;
  transition: .3s ease all;
  
  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
  }
}

.box:hover {
  background: ${darkDetailColor};
  width: 320px;
}

.box-1 {
  left: 52%;
  animation: ${props => (props.menu === 1 ? 'box1ToCenter .5s  .5s ease forwards;' : 'box1Back .3s ease forwards; ')}
}

.box-2 {
  left: 48%;
  animation: ${props => (props.menu === 1 ? 'box2ToCenter .5s .4s ease forwards;' : 'box2Back .3s ease forwards; ')}
}

.box-3 {
  left: 52%;
  animation: ${props => (props.menu === 1 ? 'box3ToCenter .5s .3s ease forwards;' : 'box3Back .3s ease forwards; ')}
}

.box-4 {
  left: 48%;
  animation: ${props => (props.menu === 1 ? 'box4ToCenter .5s .2s ease forwards;' : 'box4Back .3s ease forwards; ')}
}

.box-5 {
  left: 52%;
  animation: ${props => (props.menu === 1 ? 'box5ToCenter .5s .1s ease forwards;' : 'box5Back .3s ease forwards; ')}
}

.box-6 {
  left: 52%;
  animation: ${props => (props.menu === 1 ? 'box6ToCenter .5s ease forwards;' : 'box6Back .3s ease forwards; ')}
  display: none;
}

@media screen and (max-width: 500px) {

  .box {
    width: 200px;
    height: 40px;

  }

  .box-1, .box-2, .box-3, .box-4, .box-5, .box-6 {
    left: 50%;
  }

  .box-6 {
    display: flex;
  }
}



// --------------------------------------------------------------------------------------------------  Box 1 Keyframes

@keyframes box1ToCenter {
  from {
    top: -50%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 30%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box1Back {
  from {
    top: 30%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -50%;
    transform: translate(-50%, -50%);
  }
}

// --------------------------------------------------------------------------------------------------  Box 2 Keyframes

@keyframes box2ToCenter {
  from {
    top: -50%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 38%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box2Back {
  from {
    top: 38%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -50%;
    transform: translate(-50%, -50%);
  }
}

// --------------------------------------------------------------------------------------------------  Box 3 Keyframes

@keyframes box3ToCenter {
  from {
    top: -50%;
    transform: translate(-50%, -50%);
  }
  to {
    top:46%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box3Back {
  from {
    top: 46%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -50%;
    transform: translate(-50%, -50%);
  }
}

// --------------------------------------------------------------------------------------------------  Box 4 Keyframes

@keyframes box4ToCenter {
  from {
    top: -50%;
    transform: translate(-50%, -50%);
  }
  to {
    top:54%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box4Back {
  from {
    top: 54%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -50%;
    transform: translate(-50%, -50%);
  }
}

// --------------------------------------------------------------------------------------------------  Box 5 Keyframes

@keyframes box5ToCenter {
  from {
    top: -50%;
    transform: translate(-50%, -50%);
  }
  to {
    top:62%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box5Back {
  from {
    top: 62%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -50%;
    transform: translate(-50%, -50%);
  }
}

// --------------------------------------------------------------------------------------------------  Box 6 Keyframes

@keyframes box6ToCenter {
  from {
    top: -50%;
    transform: translate(-50%, -50%);
  }
  to {
    top:70%;
    transform: translate(-50%, -50%);
  }
}

@keyframes box6Back {
  from {
    top: 70%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -50%;
    transform: translate(-50%, -50%);
  }
}



`
