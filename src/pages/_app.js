import App from 'next/app'
import { Provider } from 'react-redux';
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppStore } from '../store';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
          <Provider store={AppStore}>
        <Component {...pageProps} />
          </Provider>
      </ThemeProvider>
    )
  }
}