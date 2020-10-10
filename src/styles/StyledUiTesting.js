import Styled from 'styled-components'
import { detailColor, black } from './GlobalStyle'

export const StyledUiTesting = Styled.div`

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
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

  }

.image {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  .image-normal {
    width: 70%;
    padding: 10px;
  }
  .image-full {
    width: 100%;
    padding: 10px;
  }
}
  
}


@media screen and (min-width: 1920px) {
  width: 80%;
  margin: auto;
  }

@media screen and (max-width: 500px) {

  padding: 100px 0 50px 0;

  .card {
    margin-top: 10px;

    .image {
      .image-full, .image-normal {
        width: 100%;
        padding: 0;
        margin: 0;
      }
    }
  }


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
