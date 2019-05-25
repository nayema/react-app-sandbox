import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from './ProTip'
import { Link } from 'react-router-dom'

import SubmitButton from './SubmitButton'

export const App = () =>
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App v4-beta example
      </Typography>
      <ProTip/>
      <Link to="/form"><SubmitButton/></Link>
    </Box>
  </Container>
