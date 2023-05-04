import React from 'react'
import Box from '@mui/material/Box'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
    <Box sx={{backgroundColor:'#0d0d0d',height:'100%'}}>
  <NavBar/>
  {children}
  <Footer/>
  </Box>
    </>
  )
}
