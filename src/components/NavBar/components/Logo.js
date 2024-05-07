// Logo.js
import React from 'react';
import logo from '../../../assets/logo.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme} from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640, 
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function Logo() {
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  return (
   <Link to={'/'}>
    <img src={logo} alt='' 
      style={{
        width: isMobileView ? '12vh': '15%',
        position: 'absolute',
        left: "-3%", 
        top: '-15%',
        zIndex: 1000,
        padding: '0.5rem',
      }}
    />
   </Link>
    
  );
}





