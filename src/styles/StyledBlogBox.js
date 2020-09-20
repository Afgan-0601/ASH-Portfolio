import Styled from 'styled-components'
import { black, detailColor, lightDetailColor } from './GlobalStyle'

export const StyledBlogBox = Styled.div`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

width: 70%;
border: 2px solid ${lightDetailColor};
display: flex;
margin: 20px 0;


.image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  img {
    width: 100%;
  }
}

.description {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 35px;
  
  h3 {
    color: ${detailColor};
    margin-bottom: 10px;
  }

  p {
    color: ${black};
  }

  a {
    button {
    border-style: none;
    margin-top: 30px;
    width: 100%;
    height: 35px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    cursor: pointer;
    background: ${detailColor};
    color: white;
    transition: .3s ease all;
  }

  button:hover {
    background: ${lightDetailColor};
  }

  button:focus, button:active {
    outline: none;
  }
}
}

`
