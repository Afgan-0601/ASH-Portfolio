import { createGlobalStyle } from 'styled-components'
export const bgColor = '#ECF0F3'
export const black = '#2B2B2D'
export const white = '#ECF0F3'
export const detailColor = '#9A48D2'
export const lightDetailColor = '#af76d6'
export const dangerColor = '#db2a50'

export const GlobalStyle = createGlobalStyle`


body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "Open Sans", sans-serif;
  user-select: none;
  overflow-y: ${props => (props.home === 1 || props.menu === 1 ? 'hidden;' : 'scroll')};
}

`
