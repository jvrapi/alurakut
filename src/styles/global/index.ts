import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import AlurakutStyles from '../AlurakutStyles'

export default createGlobalStyle`
  * {
  margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.primary};
    font-family: sans-serif;
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`
