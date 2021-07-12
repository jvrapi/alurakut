import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import theme from '../styles/global/theme'
import UserContextProvider from '../context/userContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserContextProvider>
    </>
  )
}

export default MyApp
