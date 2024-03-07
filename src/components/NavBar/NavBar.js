import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { menuItems } from './MenuItems';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme} from '@mui/material';
import logo from '../../assets/logo.png';
import Fade from '@mui/material/Fade';


const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(227,117,45,255)', 
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: 'rgba(144,179,25,255)',
    },
    secondary: {
      main: 'rgba(255,255,255,255)',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      "Madimi One", 
      'sans-serif'
    ].join(','),
  }
});

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubItems, setOpenSubItems] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [activeItem, setActiveItem] = useState(null);


  const handleToggle = (event, item) => {
    setOpenItems(prevState => ({ ...prevState, [item]: !prevState[item] }));
    setAnchorEl(event.currentTarget);
    setActiveItem(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
  setActiveItem(null);
  setOpenItems({});
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubItems = (item) => {
    setOpenSubItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const drawer = (
    <ThemeProvider theme={theme}>
      <div>
        {isMobileView ? null : Object.keys(menuItems).map((item) => (
          <React.Fragment key={item}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => handleToggle(event, item)}
              color='secondary'
            >
              {item}
              {openItems[item] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            {anchorEl && item === activeItem && (
              <Popover
                id="menu-appbar"
                open={openItems[item]}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box sx={{ p: 2 }}>
                  {menuItems[item].map((subItem) => (
                    <MenuItem key={subItem.name} onClick={handleClose} component={Link} to={subItem.link}>
                      {subItem.name}
                    </MenuItem>
                  ))}
                </Box>
              </Popover>
            )}
          </React.Fragment>
        ))}
      </div>
    </ThemeProvider>
  );
 
  const mobileDrawer = (
    <List>
      {Object.keys(menuItems).map((item) => (
        <React.Fragment key={item}>
          <ListItem onClick={() => handleSubItems(item)}>
            <ListItemText primary={item} />
            {openSubItems[item] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubItems[item]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItems[item].map((subItem) => (
                <ListItem  key={subItem.name} component={Link} to={subItem.link}>
                  <ListItemText primary={subItem.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );

  return (
  <ThemeProvider theme={theme}>
    <AppBar position="static" color='primary'> 
    <Toolbar 
    sx={{ 
      display: 'flex', 
      flexDirection: 'row', 
      height: '50vh',
    
      }}>
        <div>
          <img src={logo} alt='' 
          style={{
            width: '100%',
            maxWidth:'20vw',
            position: 'absolute',
             left: "-3%", 
             top: '-1%'
             }}/>
        </div>
        
      {isMobileView && (
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ position: 'fixed', top: '5%', right: '10px' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      <Toolbar 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            textAlign: 'center'}}>
          <div>
            <Typography variant="h2" 
            component="div" 
            sx={{
              color: 'rgba(254,254,253,255)', 
              paddingLeft: '20px',
              }}>
              Visit Kelcyra
            </Typography>
          </div>
          
          <div 
          style = 
          {{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flex: 2 ,
          }}
          >
            {drawer}
          </div>
          
      </Toolbar> 
    </Toolbar>
    
    <nav>
      <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          style: {
            backgroundColor: 'white', 
          },
        }}
      >
      <Fade in={mobileOpen} timeout={3000}> 
        <div>
          {mobileDrawer}
        </div>
      </Fade>
</Drawer>
      </Hidden>
    </nav>
  </AppBar>
  </ThemeProvider>
);
}