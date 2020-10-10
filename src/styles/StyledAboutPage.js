import Styled from 'styled-components'
import { black, detailColor } from './GlobalStyle'

export const StyledAboutPage = Styled.div`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

width: 100%;
height: 100%;
margin:0;
padding: 0;
overflow-x: hidden;
display: flex;
flex-direction: column;
opacity: ${(props) => (props.menu === 1 ? '.3' : 1)};
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
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;


  img {
    width: 60%;
    margin: 20px 0;
  }

  ul {
  
    margin: 20px 0;
    width: 80%;
    list-style: none;
    li {
      color: ${black};
      margin: 10px 0;
      position: relative;

      .icon {
        position: absolute;
        left: -25px;
        font-size: 10px;
        top: 7px;
        color: ${detailColor};
      }
    }

  }
}


@media screen and (min-width: 1920px) {
  width: 80%;
  margin: auto;
  }

@media screen and (max-width: 1025px) { 

  .title {
    width: 100%;
  }

  .card {
    width: 90%;

    img {
      width: 70%;
    }
  }

}

@media screen and (max-width: 450px) {

  .title {
    width: 100%;
  }

  .card {
    width: 90%;

    img {
      width: 70%;
    }
  }
}


`
