import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import theme from '../styles/global/theme'
import UserContextProvider from '../context/userContext'
import CommunityContextProvider from '../context/communityContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <CommunityContextProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CommunityContextProvider>
      </UserContextProvider>
    </>
  )
}

export default MyApp
