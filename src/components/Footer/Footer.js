import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box, makeStyles } from '@material-ui/core';
import {footerData} from './FooterContent';
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    backgroundColor: 'rgba(144,179,25,200)',
    color: 'white',marginTop: '8%'
  },
  typographyItem:{
    display: 'flex',
    justifyContent: 'left',
    textAlign: "left",
    paddingTop: '5%'
  },
  typographySubItem: {
   display: 'flex',
   justifyContent:"flex-start",
   textAlign: 'left',
   alignItems: 'center'
  },

}));

function Footer() {

  const classes = useStyles();
  return (
    <footer>
      <Box p={2}>
       <Grid container spacing={2} className={classes.gridContainer}>
        {Object.values(footerData).map((columnData, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Typography variant="h6" className={classes.typographyItem}>{columnData.title}</Typography>
            {columnData.description && (
              <Typography variant="body2" className={classes.typographyItem} component='div'>
                <div dangerouslySetInnerHTML={{ __html: columnData.description.replace(/\n/g, '<br />') }} />
              </Typography>
            )}
            {columnData.subtitles && columnData.subtitles.map((subtitle, index) => (
              <Typography variant="subtitle1" key={index} className={classes.typographySubItem}>{subtitle}</Typography>
            ))}
          </Grid>
        ))}
      </Grid> 
      </Box>
      
    </footer>
  );
}

export default Footer;