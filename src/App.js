import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from './ProTip'

import RouteButton from './RouteButton'

export const App = () =>
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App v4-beta example
      </Typography>
      <ProTip/>
      <RouteButton
        to="/form"
        buttonName="Submit Form"
      />
    </Box>
  </Container>
