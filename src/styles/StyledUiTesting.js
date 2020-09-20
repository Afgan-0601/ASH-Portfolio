import Styled from 'styled-components'
import { detailColor } from './GlobalStyle'

export const StyledUiTesting = Styled.div`

width: 100%;
height: 100%;
margin:0;
padding: 0;
overflow-x: hidden;
display: flex;
flex-direction: column;
opacity: ${props => (props.menu === 1 ? '.3' : 1)};
transition: .3s ease all;

.title {
  width: 70%;
  margin: auto;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${detailColor};
    text-transform: uppercase;
    font-size: 20px;
  }
}

.card {
  width: 70%;
  height: 500px;
  margin: 30px auto;
  display: flex;
  align-items: center;

  .image {
    width: 50%;
    height: 100%;
    background: green;

    img {
      width: 100%;
    }
  }

  .description {
    width: 50%;
    height: 100%;
    background: red;
  }
}
`
