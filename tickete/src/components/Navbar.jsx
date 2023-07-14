import React, { useEffect, useState } from 'react'
import {AppBar,Toolbar,Typography,Box} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const navbarStyles = {
    background:'white',
    color:'rgba(71,71,71,1)',
    boxShadow:'none',
    fontFamily:'Open Sans',
    padding:'0px 15px'
}

const toolbarContainerStyles = {
    display:'flex',
    width:'100%',
    justifyContent:'space-between'
}

const headingStyles = {
    fontFamily:'inherit',
    fontSize:'24px',
    fontWeight:'600',
    color:'inherit',
}

const boxStyles = {
    display:'flex',
    color:'inherit'
}

const Navbar = () => {
    const[isScrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollVal = 10; // Threshold value
    
          setIsScrolled(scrollTop > scrollVal);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <AppBar position='sticky' sx={{
        ...navbarStyles,
        boxShadow: isScrolled ? '1' : 'none',
      }}
    >
        <Toolbar sx={toolbarContainerStyles}>
            <Typography sx={headingStyles}>tickete</Typography>
            <Box sx={boxStyles}>
                <HelpIcon/>
                <Typography>Help</Typography>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar