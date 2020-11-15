import Styled from 'styled-components'
import { white, detailColor, darkDetailColor } from './GlobalStyle'

export const StyledScrollUpButton = Styled.div`
margin-top: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
button {
    height: 60px;
    width: 60px;
    margin-left: 10px;
    border-style: none;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    border-radius: 50%;
    font-size: 12px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .3s all ease;
    color: ${white};
    background: ${detailColor};
}

button:active, button:focus {
    outline: none;
}

button:hover {
    background: ${darkDetailColor};
}
`
