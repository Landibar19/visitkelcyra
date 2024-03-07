import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import SlideShow from './SlideShow';

const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  width: '95%',
  margin: '0 auto',
}));

const Div = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(144,179,25,255)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  width: '80%',
  margin: '0 auto',
}));

function Section2() {
  return (
    <Section>
      <Div>
        <Typography variant="h3">Visit Kelcyra</Typography>
        <Typography variant="h5">Natyrë Unike dhe Pasuri Kulturore</Typography>
          <Typography variant="body1">
            Vizitoni atraksionet turistike, monumentet e kultures dhe te natyres, objektet
            e kultit si dhe shume destinacione te tjera qe ofron Kelcyra, vend cili do t’ju 
            surprizojë në shumë aspekte, jo vetëm në kulturë dhe traditë, por edhe
             me gatimet tradicionale te zones si dhe me larmishmerine e bukurive natyrore qe 
             ofron zona.Gjithashtu do te gjeni edhe objekte kulti, natyre  dhe historike te 
             vencanta qe mbushin aventuren tuaj me surpiza dhe emocione te paharrueshme.
          </Typography>
      </Div>
      <SlideShow/>
     
    </Section>
  );
}

export default Section2;