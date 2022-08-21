import React from 'react'
import {Stack, TextField, Typography, Box, Button} from '@mui/material'
import HorinzontalScrollbar from './HorinzontalScrollbar'

const SearchExercises = () => {
  return (
    <Stack>
      <Typography>Awesome Exercises You <br /> Should Know</Typography>

      <Box position="relative" mb="72px">
        <TextField />
        <Button>Search</Button>
      </Box>

      <Box>
        <HorizontalScrollbar />
      </Box>

    </Stack>
  )
}

export default SearchExercises