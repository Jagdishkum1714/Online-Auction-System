import { Typography, Box } from '@mui/material'

import React from 'react'

const Footer = () => {
  return (
    // 1 = 8px, 2 = 16px, 3 = 24px
    <Box bgcolor="#bbe9db" py={2}> 
      <Typography 
        // sx={{ color: "#FFF", textAlign: "center" }} 
        align="center"
        color="#FFF"
      >
        &copy; Movies Web 2024
      </Typography>
    </Box>
  )
}

export default Footer