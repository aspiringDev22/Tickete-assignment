import React from 'react'
import {Box,useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';


const App = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); 
  return (
    <Box minHeight="100vh" width={isMobile ? "115vw":"100vw"}>
    <Navbar/>
    <Dashboard/>
    </Box>
  )
}

export default App