import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ShowMoreText from 'react-show-more-text';

import images from './Section3Content';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
        boxShadow: '0 3px 5px 2px rgba(144, 238, 154, 3)',
        padding: 3,
        borderRadius: '15px',
        backgroundColor: '#fff',
        margin: '0 auto',
      
    },
    actionArea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: '250px',
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px',
    },
    content: {
        marginTop: '10px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    description: {
        marginTop: '10px',
        fontSize: '16px',
    },
    'show-more-less': {
        color: 'blue',
        cursor: 'pointer',
        textDecoration: 'none',
    },
});

export default function MediaCard() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Box p={3}>
            <Typography 
            variant="h5" 
            align="center"
            gutterBottom>
                Eksploro vendet me te bukura te Kelcyres
            </Typography>
            <Grid container  spacing={3}>
            {images.slice(0, matches ? 6 : 6).map((image, index) => (
                <Grid item xs={12} sm={4} key={index}>
                <div className={classes.root}>
                    <div className={classes.actionArea}>
                        <img className={classes.media} src={image.image} alt={image.title} />
                        <div className={classes.content}>
                        <h2 className={classes.title}>{image.title}</h2>
                        <ShowMoreText
                            lines={3}
                            more='Show more'
                            less='Show less'
                            className={classes.description}
                            anchorClass={classes['show-more-less']}
                            expanded={false}
                            width={280}
                            truncatedEndingComponent={"..."}
                        >
                            {image.description}
                        </ShowMoreText>
                        </div>
                    </div>
                    </div>
                </Grid>
            ))}
            </Grid>
        </Box>
    );
}