import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import background from '../../../assets/Background1.jpg'; // adjust the path to match your image location

const Section = styled(Box)(({ theme }) => ({
  background: `url(${background}) no-repeat center center/cover`,
  [theme.breakpoints.up('xs')]: {
    height: '60vw'
  },
  [theme.breakpoints.up('sm')]: {
    height: '40vw'
  },
  width: '95%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: 3
}));

const Div = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  color: 'white',
  fontSize: {xs:'10vw'},
  fontFamily: ["Madimi One", 'sans-serif'].join(','),
  [theme.breakpoints.up('xs')]: {
    fontSize: '7vw'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '5vw'
  },
  width: '95%'
}));


function Section1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section>
      <Div sx={{ transform: 'rotate(-15deg)'}}>Eksploro Kelcyren</Div>
      <Div sx={{ transform: 'rotate(20deg)'}}>Vizito Pikat turistike</Div>
      {isMobile ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: 'absolute', bottom: 0, width: '100%'}}>
        
          <path fill="white" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: 'absolute', bottom: 0, width: '100%'}}>
       
          <path fill="white" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      )}
    </Section>
  );
}

export default Section1;
