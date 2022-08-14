import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml:{
      sm:'50px'
    }}} position='relative' p='20px'>
      <Typography fontWeight='600' fontSize= '70px' color='#FF2625'>Fitness Club</Typography>
      <Typography fontWeight={700} mb='20px' mt='20px' sx={{fontSize: {lg: '44px', xs: '40px'}}}>
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize='22px' fontFamily='Alegreya' lineHeight='35px'>
      Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a href='#exercises' style={{marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px'}}>Explore Exercises</a>
      </Stack>
      <Typography fontWeight={600} color='#FF2625' sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}, fontSize:'200px'}}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='HeroImage' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner