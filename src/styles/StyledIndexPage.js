import Styled from 'styled-components'
import { detailColor, black, darkDetailColor } from './GlobalStyle'

export const StyledIndexPage = Styled.div`


width: 100vw;
height: 100vh;
margin: 0;
padding: 0;
display: flex;
box-sizing: border-box;
justify-content: center;
align-items: center;
font-family: 'Open Sans', sans-serif;
overflow: hidden;
color: ${black};
opacity: ${props => (props.menu === 1 ? '.3' : 1)};
transition: .3s ease all;

.left-column {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .hero {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
     
    h1 {
      margin: 0;
      font-size: 50px;
      text-transform: uppercase;
      }

    h4 {
      font-size: 15px;
      margin: 2px 0 20px 0;
      letter-spacing: 2.4px;
      color: ${detailColor};
    }
    
    .buttons {
      button {
        height: 43px;
        width: 180px;
        margin-left: 10px;
        border-style: none;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        letter-spacing: 1px;
        cursor: pointer;
        transition: .3s all ease;
        border-radius: 5px;
   
      }
      button: focus, button:active {
        outline: none;
      }

      .portfolio {
        color: white;
        background: ${detailColor};
      }

      .portfolio:hover {
        background: ${darkDetailColor};
      }
      
      .contact {
        color: ${detailColor};
        background: white;
        border: 2px solid ${detailColor};
        font-weight: 700;
      }  
      .contact:hover {
        border: 2px solid ${darkDetailColor};
        color: ${darkDetailColor};
      }
    }
  }
}

.right-column {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 80%;
  }
}

@media screen and (min-width: 1920px) {
width: 80vw;
margin: auto;
}

@media screen and (max-width: 1290px) {

  .left-column {
  
    .hero {

      h1 {
        font-size:40px;
        text-align: right;
      }

    }
}

@media screen and (max-width: 1025px) {
  flex-direction: column;

  .left-column {
    width: 100%;
    .hero {
      align-items: center;
      margin-top: auto;
      margin-bottom: 10%;

      h1 {
        font-size:50px;
      }

      .buttons {
        button {
          margin-bottom: 10px;
        }
      }
    }
   
  }

  .right-column {
    width: 80%;
    align-items: center;
    justify-content: center;

  }
}


@media screen and (max-width: 450px) {
  flex-direction: column;
  justify-content: flex-end;
  .left-column {

    justify-content: center;
    width: 90%;
    height: 70%;
    .hero {
      justify-content: center;
      width: 90%;
      margin-top: 40%;
      margin-bottom: 0;

      h1 {
        width: 100%;
        font-size: 28px;
        text-align: center;
       
      }

      h4 {
        text-align: center;
      }

      .buttons {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
        button {
          margin-bottom: 10px;
          margin-left: 0;
        }
        .portfolio {
          margin-right: 10px;
        }
      }
    }
  }

  .right-column {
    width: 80%;
    height: 70%;
    align-items: flex-start;

    img {
      width: 100%;
      margin-top: 20%;

    }

  }
}

@media screen and (max-width: 325px) {

  .left-column {
    .hero {
      margin-top: 50%;

      h4 {
        text-align: center;
      }
    }
  }

  .right-column {
    width: 80%;
    height: 50%;
    align-items: flex-start;

    img {
      width: 70%;
      margin-top: 0;
      opacity: 0;
    }

  }
  
}

`
