import React from 'react'
import { Container, Typography } from '@mui/material'

function Hero() {
  return (
    <Container sx={{marginTop: "12rem"}} >
        <Typography fontSize={88}  align="center" color={"#1D2029"} fontFamily={'inherit'} fontWeight={600}>
            Solar Flares and Beyond
        </Typography>
        <Typography fontSize={45} align="center" color={"#1D2029"} fontFamily={'inherit'} fontWeight={500}>
            Exploring Sun's stormy nature
        </Typography>
    </Container>
  )
}

export default Hero