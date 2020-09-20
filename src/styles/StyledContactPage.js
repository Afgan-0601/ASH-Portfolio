import Styled from 'styled-components'
import { black, detailColor } from './GlobalStyle'
export const StyledContactPage = Styled.div`


width: 100%;
height: 100%;
margin:0;
padding: 0;
overflow-x: hidden;
display: flex;
flex-direction: column;
opacity: ${props => (props.menu === 1 ? '.3' : 1)};
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

.first-row {
height: 100%;
width: 100%;

display: flex;

.left-side {
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    margin: 20px 0;
  }
}

.right-side {
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

ul {
  list-style: none;

  li {
    color: ${black};
    display: flex;
    margin: 20px 0;
    align-items: center;
    .icon {
      color: ${detailColor};
      width: 50px;
      font-size: 25px;
    }
  }
}
}
}


.second-row {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

h1 {
  color: ${detailColor};
  text-transform: uppercase;
  font-size: 20px;
}

form {
  display: flex;
  flex-direction: column;
  width: 60%;

  input, textarea {
    margin: 10px 0;
    padding: 5px;
    border-style: none;
    border: 2px gray solid;
    transition: .2 ease all;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    color: ${black};
  }

  input:focus, textarea:focus {
    outline: none;
    border: 2px ${detailColor} solid;
  }

  input {
    height: 30px;
  }

  textarea {
    resize: none;
  }

  button {
    height: 40px;
    border-style: none;
    background: ${detailColor};
    color: white;
  }

  button:focus, button:active {
    outline: none;
  }
}
}

}



`
