import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const RouteButton = ({ to, buttonName }) =>
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    component={Link}
    to={to}
  >
    {buttonName}
  </Button>

export default RouteButton
