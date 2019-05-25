import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const SubmitButton = () =>
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    component={Link}
    to="/form"
  >
    Submit Form
  </Button>

export default SubmitButton
