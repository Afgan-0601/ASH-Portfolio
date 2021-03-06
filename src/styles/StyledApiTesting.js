import Styled from 'styled-components'
import { black, detailColor } from './GlobalStyle'

export const StyledApiTesting = Styled.div`

* {
  box-sizing: border-box;
}

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 100px 0;
font-family: "Open Sans", sans-serif;
opacity: ${(props) => (props.menu === 1 ? '.3' : 1)};
transition: .3s ease all;

.card {
  width: 70%;
  max-width: 1200px;

  .image {
    margin: 30px 0;
    img {
      width: 100%;
    }
  }
  .text, .title{
    h1 {
      color: ${detailColor};
    }
  
    h3 {
      color: ${detailColor};
    }
  
    p {
      color: ${black};
      text-align: justify;
    }
    ul {
      list-style: none;
      padding: 0 25px;

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


  
}

.card1 {

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 90%;
    }
  }
}

.card3 {

}

.card3, .card4 {
  display: flex;
  justify-content: flex-end;
  .image {
    width: 50%;
    display: flex;
  
    img {
      width: 90%;
    }
  }
  .text {
    width: 50%;
}

}


.card4 {
  .image {
    justify-content: flex-start;
    img {
      width: 80%;
    }
  }
}

@media screen and (max-width: 500px) {

  padding: 100px 0 50px 0;

 
.card3, .card4 {
  flex-direction: column;

  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .text {
    width: 100%;
  }
}

.card4 {
  flex-direction: column-reverse;

  .image {
    justify-content: center;
    align-items: center;

  }
}
}

@media screen and (min-width: 1920px) {
  width: 80%;
  margin: auto;
  }


@media screen and (max-width: 400px) {
  .card {
      width: 80%;

      .text, .title {
        h1 {
          font-size: 20px;
        }
      }
  }
}

`
