import Styled from 'styled-components'
import { detailColor, black } from './GlobalStyle'

export const StyledCiCd = Styled.div`

* {
    box-sizing: border-box;
  }
  
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
    margin-top: 50px;
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
  
  
    
  }

  @media screen and (max-width: 400px) {
      .card {
          width: 80%;
      }
  }



`
