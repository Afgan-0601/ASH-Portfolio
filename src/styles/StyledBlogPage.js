import Styled from 'styled-components'
import { black, detailColor } from './GlobalStyle'

export const StyledBlogPage = Styled.div`


width: 100%;
height: 100%;
margin:0;
padding: 0;
overflow-x: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
opacity: ${props => (props.menu === 1 ? '.3' : 1)};
transition: .3s ease all;
padding-bottom: 50px;


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

@media screen and (min-width: 1920px) {
  width: 80%;
  margin: auto;
  }




`
