import Styled from 'styled-components'
import { black, detailColor } from './GlobalStyle'

export const StyledNavigation = Styled.div`


width: 100%;
height: 5vh;
padding: 0;
margin: 0;
position: absolute;
top: 2%;
left: 0;
display: flex;
justify-content: center;
align-items: flex-end;
font-family: "Open Sans", sans-serif;
color: ${black};
z-index: 100;

ul {
  margin: 0;
 padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  list-style: none;

  li {
    font-size: 13px;
    font-weight: 700;
    transition: .3s all ease;
    cursor: pointer;
  }

  li:hover {
    color: ${detailColor};
  }

  .home {
    color: ${props => (props.home === 1 ? detailColor : black)};
  }

  .about {
    color: ${props => (props.about === 1 ? detailColor : black)};
  }

  .contact {
    color: ${props => (props.contact === 1 ? detailColor : black)};
  }

  .portfolio {
    color: ${props => (props.menu === 1 || props.portfolio === 1 ? detailColor : black)};
  }

  .blog {
    color: ${props => (props.blog === 1 ? detailColor : black)};
  }

  a {
    text-decoration: none;
    color: ${black};
  }



}

.burgerMenu {display: none;}
.homeIcon {display: none;}

@media screen and (max-width: 1200px) {

  ul {display: none;}

  .burgerMenu {
    display: flex;
    font-size: 27px;
    margin-left: auto;
    margin-right: 30px;
    color: ${detailColor};
  }

  .homeIcon {
    display: flex;
    visibility: ${props => (props.home === 1 ? 'hidden' : 'visible')};
    font-size: 29px;
    margin-right: auto;
    margin-left: 30px;
    color: ${detailColor};
  }


}


`
