import Styled from 'styled-components'
import { detailColor, black } from './GlobalStyle'

export const StyledCiCd = Styled.div`

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

      span {
          font-weight: bold;
          color: ${detailColor};
      }
  
    }
  
  .image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;

    img {
      width: 80%;
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

          .image {
            width: 100%;

            img {
              width: 100%;
            }
          }

          .text, .title {
            h1 {
              font-size: 20px;
            }
          }
      }
  }



`
