import Styled from 'styled-components'
import { black, detailColor, darkDetailColor } from './GlobalStyle'

export const StyledBlogBox = Styled.div`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

width: 60%;
display: flex;
margin: 20px 0;
border-radius: 15px;
overflow: hidden;
box-shadow: 0 0 15px rgba(0,0,0,.2);

.image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
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
    height: 45px;
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
    background: ${darkDetailColor};
  }

  button:focus, button:active {
    outline: none;
  }
}
}

@media screen and (max-width: 1100px) {
  flex-direction: column;
  width: 60%;

  .image {
    width: 100%;
    height: 50%;
    min-height: 50%;
  }

  .description {
    width: 100%;
    height: 50%;
  }
}

@media screen and (max-width: 500px) {
  flex-direction: column;
  width: 80%;

  .image {
    width: 100%;
    height: 50%;
    min-height: 50%;
  }

  .description {
    width: 100%;
    height: 50%;
  }
}

`
