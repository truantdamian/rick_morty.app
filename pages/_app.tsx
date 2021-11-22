import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

import type { AppProps /*, AppContext */ } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import client from 'apollo/client'

import styled, { createGlobalStyle } from 'styled-components'
import AppContextProvider from 'contexts/AppContextProvider'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    background-color: #666;
  }

  *, *:after, *:before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  textarea:focus, input:focus {
    outline: none;
  }
`

const SectionMain = styled.main`
  background-color: #fff;
  flex-grow: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  padding: 0.5rem;
  max-width: 40%;
  min-width: 500px;
  margin: auto;
`

const SectionFooter = styled(Footer)`
  position: sticky;
  bottom: 0;
`
const SectionHeader = styled(Header)`
  position: sticky;
  top: 0;
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <SectionContainer>
        <AppContextProvider>
          <SectionHeader />
          <SectionMain id="main">
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </SectionMain>
          <SectionFooter />
        </AppContextProvider>
      </SectionContainer>
    </>
  )
}

export default MyApp
