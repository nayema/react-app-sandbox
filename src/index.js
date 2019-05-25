import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'

import store from './store'

import { App } from './App'
import Form from './Form'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline/>
      <Container maxWidth="sm">
        <Box my={4}>
          <Router>
            <div>
              <Route exact path="/" component={App}/>
              <Route path="/form" component={Form}/>
            </div>
          </Router>
        </Box>
      </Container>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
)
