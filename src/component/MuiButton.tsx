import React from 'react'
import {Button, Stack} from '@mui/material'
function MuiButton() {
  return (
    <Stack>
      <Button variant="text">Text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
    </Stack>
  )
}

export default MuiButton
