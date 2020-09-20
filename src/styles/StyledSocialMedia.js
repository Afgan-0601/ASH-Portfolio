import Styled from 'styled-components'
import { detailColor } from './GlobalStyle'

export const StyledSocialMedia = Styled.div`

width: 100vw;
height: 70px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
position: ${props => (props.home === 1 ? 'absolute' : 'relative')};
bottom: 0;
left: 0;

.credit {
  margin-top: 10px;
  p {
    font-size: 12px;
    opacity: .7;
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      margin: 0 3px;
    }
  }
}
.container{
  width: 20%;
  display: flex;
  justify-content: space-around;

  .icon {
    font-size: 25px;
    color: ${detailColor};
  }
}


@media screen and (max-width: 850px) {

  .container {
    width: 40%;
  }
  
  }

@media screen and (max-width: 450px) {

.container {
  width: 60%;
}

}


`
