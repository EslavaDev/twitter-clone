import App, {Container} from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper';;
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppStore } from '../store';

import 'semantic-ui-css/semantic.min.css'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default withRedux(AppStore, { debug: true })(class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps, store} = this.props
    return (
      <ThemeProvider theme={theme}>
          <Provider store={store}>
        <Component {...pageProps} />
          </Provider>
      </ThemeProvider>
    )
  }
}
)