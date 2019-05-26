import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import RouteButton from './RouteButton'

const Form = () =>
  <Container maxWidth="sm">
    <Box my={4}>
      <h1>Welcome to my Form Page</h1>
      <RouteButton
        to="/"
        buttonName="Back to Home"
      />
    </Box>
  </Container>

export default Form
